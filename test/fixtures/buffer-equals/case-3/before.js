const { Buffer } = require('node:buffer');
const bufferEqual = require('buffer-equals');

const buf1 = Buffer.from('abc');

const str = buf1.equals(Buffer.from('def'));
