const markdownToHTML = require('./_filters/markdown');
const { imageResize } = require('./_filters/image');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');

  eleventyConfig.addNunjucksFilter('markdownToHTML', markdownToHTML);
  eleventyConfig.addNunjucksAsyncFilter('imageResize', imageResize);
};