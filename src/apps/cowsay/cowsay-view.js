import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav';
import { css } from 'emotion';
import cowsay from 'cowsay2';
import cows from 'cowsay2/cows';
import axios from 'axios';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;

    pre {
      font-size: 14px;
      margin-top: 0;
    }

    textarea {
      width: 300px;
      height: 5em;
      font-family: inherit;
      font-size: 14px;
      margin-bottom: 5px;
      border: 1px solid #ddd;
    }
  `,
  ranch: css`
    border-right: 1px solid black;
    padding-right: 15px;
    margin-right: 20px;
  `,
};

export default function CowsayView({ initialPhrases, type }) {
  let [ phrases, setPhrases ] = useState(initialPhrases);
  let [ cowName, setCowName ] = useState('default');

  async function loadPhrases() {
    let phrasesResponse = await axios.get('/demos/cowsay/_xhr/phrases');
    setPhrases(phrasesResponse.data);
  }

  useEffect(() => {
    if (!phrases) {
      loadPhrases();
    }
  }, []);

  function addPhrase() {
    setPhrases([
      ...phrases,
      '',
    ]);
  }

  function deletePhrase() {
    if (phrases.length > 0) {
      setPhrases(phrases.slice(0, phrases.length - 1));
    }
  }

  function updatePhrase(index, phrase) {
    setPhrases([
      ...phrases.slice(0, index),
      phrase,
      ...phrases.slice(index + 1),
    ]);
  }

  function changeCow(e) {
    setCowName(e.target.value);
  }

  return (
    <div>
      <Nav current="demos" />
      <div className={style.container}>
        <h3>Cowsay ({type})</h3>
        {!phrases && <i className="fa fa-circle-notch fa-spin" style={{ fontSize: '30px' }} />}
        {phrases &&
          <div style={{ display: 'flex' }}>
            <div className={style.ranch}>
              {phrases.map((p, i) => {
                return (
                  <div key={i}><pre>{cowsay.say(p, { cow: cows[cowName] })}</pre></div>
                );
              })}
            </div>
            <div>
              <div>
                {phrases.map((p, i) => (
                  <div key={i}>
                    <textarea
                      defaultValue={p}
                      onChange={e => updatePhrase(i, e.target.value)}
                    />
                  </div>
                ))}
                <div>
                  <button onClick={addPhrase}><i className="fa fa-plus" /></button>
                  <button onClick={deletePhrase}><i className="fa fa-minus" /></button>
                </div>
              </div>
              <hr />
              Cow: <select defaultValue="default" onChange={changeCow}>
                {Object.keys(cows).map(key => <option key={key}>{key}</option>)}
              </select>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
