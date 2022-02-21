import {getAllCharacters} from './script.js';
import {getSortedValue} from './sort.js';

const filter = () => {
    const filter = getFilteredValue();
    const input = document.querySelector('.search-wrap input');
    const sort = getSortedValue();

    getAllCharacters(input.value, sort, filter[0], filter[1], 1);
    closeDropdown();
    setIconFilter(filter[0], filter[1]);
}

const getFilteredValue = () => {
    const filterAge = filteredValue(document.querySelectorAll('input[name="age"]'));
    const filterGender = filteredValue(document.querySelectorAll('input[name="gender"]'));
    return [filterAge, filterGender];
}

const filteredValue = input => {
    let value;
    input.forEach(el => {
        if (el.checked) value = el.value;
    });
    return value;
}

function closeDropdown() {
    document.querySelector('.dropdown').style.display = 'none';
}

function setIconFilter(filterAge, filterGender) {
    const icon = document.querySelector('.filter-wrap .material-icons-outlined');
    const setStyles = (type, color) => {
        icon.textContent = type;
        icon.style.color = color;
    };

    if (filterAge !== 'all' || filterGender !== 'all') setStyles('tungsten', '#fed344');
    else setStyles('filter_alt', '#fff');
}

const setFilterDefault = () => {
    document.querySelector('input[name="age"][value="all"]').checked = true;
    document.querySelector('input[name="gender"][value="all"]').checked = true;
}

export {filter,getFilteredValue,setFilterDefault,closeDropdown};