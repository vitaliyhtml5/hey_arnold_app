import {getAllCharacters} from './script.js';
import {getFilteredValue} from './filter.js';

const search = () => {
    const input = document.querySelector('.search-wrap input');
    const formBtn = document.querySelector('.search-wrap button');
    const filter = getFilteredValue();

    getAllCharacters(input.value, '', filter[0], filter[1], 1);
}

export {search};