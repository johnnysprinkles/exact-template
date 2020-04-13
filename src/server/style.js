export default String.raw`
  @font-face {
    font-family: "PT Sans Caption";
    src: url("/static/fonts/PTSansCaption-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "PT Sans Caption";
    src: url("/static/fonts/PTSansCaption-Bold.woff2") format("woff2");
    font-weight: bold;
    font-style: normal;
    font-display: block;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: 'PT Sans Caption', Arial, sans-serif;
    font-size: 17px;
    margin: 0;
  }
  hr {
    border-style: none;
    border-bottom: 1px solid #aa8;
  }
  a {
    color: cornflowerblue;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    color: #95b6f2;
  }
  /* For react-router NavLink */
  a.active {
    color: black;
    cursor: default;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 0.02em;
  }
  h3 {
    margin-top: 0;
    font-size: 23.4px;
  }
  p {
    line-height: 1.3em;
    margin-top: 1.3em;
    margin-bottom: 1.3em;
  }
  code {
    background-color: #eee;
    padding: 1px 3px;
  }
  pre code {
    background-color: transparent;
  }
  i {
    font-family: Georgia;
  }
`;