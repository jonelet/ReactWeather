var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">About</h1>
      <p>This is a weather application build on React. I habe bult this
      for the mopmlete react web app developer course.</p>
      <p>Here are some of the tools I used:</p>

      <ul>
        <li><a href="https://faceboog.github.io/React">React</a> - This was the js framework used</li>
        <li><a href="#">Open weather map</a> - some tools</li>
      </ul>
    </div>
  )
};

module.exports = About;