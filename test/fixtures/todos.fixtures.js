const { readFile } = require('fs');

export default function readFileJSON(path) {
  return new Promise((resolve, reject) => {
    readFile(`${__dirname}/${path}`, 'utf8', (err, readData) => {
      if (err) {
        reject(err);
        return;
      }

      const response = JSON.parse(readData);
      resolve(response);
    });
  });
}
