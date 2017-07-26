if (!global._babelPolyfill) {
   require('babel-polyfill');
}

exports.header = async (event, context, cb) => {
  const html = `
    <html>
      <body>
        <h1>
          header
        </h1>
      </body>
    </html>
  `;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  cb(null, response);
}

export const normal = (event, context, cb) => {
  cb(null, 'normal response');
}

export const promise = (event, context, cb) => {
  const p = new Promise((resolve, reject) => {
    resolve('promise success');
  });
  p
    .then(r => cb(null, r))
    .catch(e => cb(e));
}

