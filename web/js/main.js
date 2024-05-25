import {createAndSortArr, getPerformance, useDoubleRAF} from './utils.js';
import __wbg_init from '../wasm/js_vs_wasm.js';
const wasm = await __wbg_init();

const container = document.querySelector('.container');
const quickSortContainer = container.querySelector('.quick-sort');

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

const clickHandler = useDoubleRAF((target, block) => {
    const resultElem = target.parentElement.querySelector('.result');
    const input = target.parentElement.querySelector('input');

    const maxlength = input ? input.getAttribute('maxlength') : '';

    if (maxlength && Number(input.value) > Number(maxlength)) {
        alert('Number too high');
        input.value = maxlength;
        return;
    }

    const result = Functions[block.dataset.name][target.dataset.lang](Number(input.value));
    resultElem.textContent = getFormatedResult(result);

    block.classList.remove('loading');
});

container.addEventListener('click', function (evt) {
    if (evt.target.tagName !== 'BUTTON') return;

    const block = evt.target.closest('.block[data-name]');
    if (!block) return;

    
    block.classList.add('loading');

    clickHandler(evt.target, block);
});