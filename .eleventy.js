const markdownToHTML = require('./_filters/markdown');

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksFilter('markdownToHTML', markdownToHTML);
};