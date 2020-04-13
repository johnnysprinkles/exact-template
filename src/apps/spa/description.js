import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Description({ letter, initialData = {} }) {
  let [ description, setDescription ] = useState(initialData[letter]);

  useEffect(() => {
    async function load() {
      let { data } = await axios.get('/demos/spa/_xhr/description/' + letter);
      setDescription(data);
      
      // One wouldn't normally mutate props, but this is a cheap stand-in for
      // something like Redux for state management.
      initialData[letter] = data;
    }
    if (!description) {
      load();
    }
  }, []);

  return (
    <div>
      {!description && <i className="fa fa-spinner fa-spin" style={{ fontSize: '30px' }} />}
      {description}
    </div>
  );
}
