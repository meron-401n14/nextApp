// next.config.js

const withSass = require("@zeit/next-sass");

//module.exports = withSass();

const withImages = require("next-images");

module.exports = withSass(withImages({}));


