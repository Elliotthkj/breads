const React = require("react");
const Default = require("./layouts/default");

function index({ breads, title }) {
  if (!breads || !breads.length) {
    return (
      <Default title="404 Not Found">
        <h1>404 Not Found</h1>
        <p>The bread you requested could not be found. :(</p>
        <p>
          <a href="/breads">Back to Breads</a>
        </p>
      </Default>
    );
  }

  return (
    <Default title={title}>
      <h2>index Page</h2>
      <ul>
        {breads.map((bread, index) => {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>{bread.name}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = index;
