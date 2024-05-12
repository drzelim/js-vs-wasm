import {createAndSortArr, getPerformance} from './utils.js';
import __wbg_init from '../wasm/js_vs_wasm.js';
const wasm = await __wbg_init();

const quickSortContainer = document.querySelector('.quick-sort');

export const getFunction = (cb, ...rest) => {
    return getPerformance(() => cb(...rest));
}

const Functions = {
    quickSort: {
        js: (...rest) => getFunction(createAndSortArr, ...rest),
        wasm: (...rest) => getFunction(wasm.quick_sort, ...rest)
    }
}

const getFormatedResult = (value) => {
    return `${value.toFixed(5)} ms`;
}

quickSortContainer.addEventListener('click', (evt) => {

    if (evt.target.tagName !== 'BUTTON') {
        return;
    }

    const resultElem = evt.target.parentElement.querySelector('.result');
    const input = evt.target.parentElement.querySelector('input');

    const maxlength = input.getAttribute('maxlength');

    if (Number(input.value) > Number(maxlength)) {
        alert('Number too high');
        input.value = maxlength;
        return;
    }

    const result = Functions[evt.currentTarget.dataset.name][evt.target.dataset.lang](Number(input.value));

    resultElem.textContent = getFormatedResult(result);
    
});