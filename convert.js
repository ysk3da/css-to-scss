var fs = require('fs');

var cssString = fs.readFileSync('./input.css', 'utf8');

const cssConverter = require('styleflux-web');

const scssString = cssConverter.cssToScss(cssString);

fs.writeFileSync('./output.scss', scssString);