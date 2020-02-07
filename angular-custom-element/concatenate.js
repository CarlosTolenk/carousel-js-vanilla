const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () => {
  const files = [
    './dist/angular-custom-element/runtime-es5.js',
    './dist/angular-custom-element/runtime-es2015.js',
    './dist/angular-custom-element/polyfills-es5.js',
    './dist/angular-custom-element/polyfills-es2015.js',
    './dist/angular-custom-element/scripts.js',
    './dist/angular-custom-element/main-es5.js',
    './dist/angular-custom-element/main-es2015.js'
  ];

  await fs.ensureDir('output');
  await concat(files, 'output/custom-element.js');
};
concatenate();
