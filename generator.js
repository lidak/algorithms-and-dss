const fs = require('fs');
const moduleName = process.env.MN || 'unnamed-module';

fs.mkdirSync(`./src/${moduleName}`);
fs.writeFileSync(`./src/${moduleName}/index.js`, '');
fs.writeFileSync(`./src/${moduleName}/readme.md`, '');
fs.writeFileSync(`./src/${moduleName}/test.js`, 'const chai = require(\'chai\');\nconst expect = chai.expect;');

console.log(`${moduleName} files generated`);