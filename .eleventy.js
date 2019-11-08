const markdownToHTML = require('./_filters/markdown');
const postCSS = require('./_filters/postcss');
const { imageResize } = require('./_filters/image');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('images');

  eleventyConfig.addNunjucksFilter('markdownToHTML', markdownToHTML);
  eleventyConfig.addNunjucksAsyncFilter('imageResize', imageResize);
  eleventyConfig.addNunjucksAsyncFilter('postCSS', postCSS);
};