const fs = require('fs');
const path = require('path');


const oldPathJS = path.join(__dirname, '..', 'pkg', 'js_vs_wasm.js');
const oldPathWasm = path.join(__dirname, '..', 'pkg', 'js_vs_wasm_bg.wasm');

const newPathJS = path.join(__dirname, '..', 'web', 'wasm', 'js_vs_wasm.js');
const newPathWasm = path.join(__dirname, '..', 'web', 'wasm', 'js_vs_wasm_bg.wasm');

fs.copyFile(oldPathJS, newPathJS, (err) => {
    if (err) {
        console.log(err);
        return;
    } 

    console.log('js_vs_wasm.js successfully copied');
});

fs.copyFile(oldPathWasm, newPathWasm, (err) => {
    if (err) {
        console.log(err);
        return;
    } 

    console.log('js_vs_wasm_bg.wasm successfully copied');
});
