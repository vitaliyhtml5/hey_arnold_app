import {getAllCharacters} from './script.js';
import {getFilteredValue} from './filter.js';
const sortArrow = document.querySelector('.content-header li span');

const sort = () => {
    const filter = getFilteredValue();
    const input = document.querySelector('.search-wrap input');
    let sort = '';

    if (sortArrow.classList.contains('sort-default')) {
        changeSorting('sort-default', 'sort-asc');
        sort = 'name';
    } else if (sortArrow.classList.contains('sort-asc')) {
        changeSorting('sort-asc', 'sort-desc');
        sort = '-name';
    } else if (sortArrow.classList.contains('sort-desc')) {
        changeSorting('sort-desc', 'sort-default');
        sort = '';
    }

    getAllCharacters(input.value,  sort, filter[0], filter[1], 1);
}

const getSortedValue = () => {
    let sort = '';
    if (sortArrow.classList.contains('sort-default'))   sort = '';
    else if (sortArrow.classList.contains('sort-asc'))  sort = 'name';
    else if (sortArrow.classList.contains('sort-desc')) sort = '-name';
    return sort;
}

const changeSorting = (prevState, newState) => {
    sortArrow.classList.remove(prevState);
    sortArrow.classList.add(newState);
}

const setDefaultSorting = () => {
    sortArrow.classList.remove('sort-asc');
    sortArrow.classList.remove('sort-desc');
}

export {sort, getSortedValue, setDefaultSorting};