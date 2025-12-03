const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // Minify and bundle CSS in production
  eleventyConfig.on('eleventy.before', async () => {
    const cssDir = 'src/assets/css';
    const outputDir = '_site/assets/css';

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read all CSS files
    const cssFiles = [
      'browser-compatibility.css',
      'reset.css',
      'variables.css',
      'typography.css',
      'main.css',
      'pages/landing.css',
      'pages/gallery.css',
    ];

    let combinedCSS = '';
    for (const file of cssFiles) {
      const filePath = path.join(cssDir, file);
      if (fs.existsSync(filePath)) {
        combinedCSS += fs.readFileSync(filePath, 'utf8') + '\n';
      }
    }

    // Minify CSS
    const minified = new CleanCSS({
      level: 2,
      sourceMap: false,
    }).minify(combinedCSS);

    // Write bundled and minified CSS
    fs.writeFileSync(path.join(outputDir, 'bundle.min.css'), minified.styles);
  });

  // Copy static assets to output (keep for dev, images, fonts)
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy('src/assets/fonts');

  // Watch CSS and JS files for changes
  eleventyConfig.addWatchTarget('src/assets/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');

  // Set custom directories
  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
