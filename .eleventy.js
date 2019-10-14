const markdownToHTML = require('./_filters/markdown');
const { imageResize } = require('./_filters/image');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');

  eleventyConfig.addNunjucksFilter('markdownToHTML', markdownToHTML);
  eleventyConfig.addNunjucksAsyncFilter('imageResize', imageResize);
};