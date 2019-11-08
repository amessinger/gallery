const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const { readFile } = require('fs-extra');

module.exports = function(filePath, callback) {
  readFile(filePath, 'utf8')
    .then(code => postcss([tailwindcss, autoprefixer]).process(code))
    .then(({ css }) => callback(null, css))
    .catch(error => console.log(error));
};
