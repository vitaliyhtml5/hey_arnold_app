import {createTable} from './createTable.js';
import {createPagination} from './createPagination.js';
import {search} from './search.js';
import {sort,setDefaultSorting} from './sort.js';
import {filter,setFilterDefault,closeDropdown} from './filter.js';

const getAllCharacters = async (search, sort, age, gender, page, size = 10) => {
    const res = await fetch(`php_scripts/get_all.php?search=${search}&sort=${sort}&age=${age}&gender=${gender}&page=${page}&page_size=${size}`);
    const data = await res.json();
    createTable(data);
    if (data.message !== "no results found" && page == 1) setPagination(data.meta.total, page, size);
}
getAllCharacters('', '', 'all', 'all', 1);

//Pagination
function setPagination(total, page, size) {
    const pageWrap = document.querySelector('.pagination');
    total > +size ? createPagination(total, page, size) : pageWrap.style.display = 'none';
}

//Search
document.querySelector('.search-wrap').addEventListener('submit', e => {
    e.preventDefault();
    search();
});

//Sort
document.querySelector('.content-header li span').addEventListener('click', () => sort());

//Filter
document.querySelector('.filter-wrap button').addEventListener('click', e => {
    const dropdown = document.querySelector('.dropdown');
    const btnFilter = document.querySelectorAll('.filter-btn button');
    e.stopPropagation();

    dropdown.style.display = 'block';
    btnFilter[0].addEventListener('click', () => filter());
    btnFilter[1].addEventListener('click', () => closeDropdown());
    dropdown.addEventListener('click', e => e.stopPropagation());

    document.onclick = e => {
        if (dropdown.style.display === 'block') closeDropdown();
    }
});


//Get Default
const getDefault = () => {
    getAllCharacters('', '', 'all', 'all', 1);
    document.querySelector('.search-wrap input').value = '';
    setFilterDefault();
    setDefaultSorting();
    closeDropdown();
} 

export {getAllCharacters,getDefault};