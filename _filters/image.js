const sharp = require('sharp');
const { dirname, basename } = require('path');
const { ensureDir } = require('fs-extra');

exports.imageResize = function(filePath, size, callback) {
  let imageFolder = dirname(filePath);
  let filename = basename(filePath);
  let destFolder = `./_site${imageFolder}/${size}`;
  
  ensureDir(`${destFolder}`)
    .then(()=> {
      sharp(`.${filePath}`)
        .resize(size)
        .toFile(`${destFolder}/${filename}`)
        .then(()=> callback(null, `${imageFolder}/${size}/${filename}`))
        .catch((error)=> console.log('could not resize image', error));
    })
    .catch((error)=> console.log('could not open images directory', error));
};
