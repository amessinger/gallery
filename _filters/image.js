const sharp = require('sharp');
const { ensureDir } = require('fs-extra');

exports.imageResize = function(filename, size, callback) {
  let destFolder = `_site/images/${size}`;

  ensureDir(`./${destFolder}`)
    .then(()=> {
      sharp(`./images/${filename}`)
        .resize(size)
        .toFile(`./${destFolder}/${filename}`)
        .then(()=> callback(null, `/images/${size}/${filename}`))
        .catch((error)=> console.log('could not resize image', error));
    })
    .catch((error)=> console.log('could not open images directory', error));
};
