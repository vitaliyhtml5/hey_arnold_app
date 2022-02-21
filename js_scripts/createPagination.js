import {getAllCharacters} from './script.js';
import {getFilteredValue} from './filter.js';
import {getSortedValue} from './sort.js';

const pageBtn = document.querySelectorAll('.pagination>span');

const createPagination = (total, start, size) => {
    const filter = getFilteredValue();
    const input = document.querySelector('.search-wrap input');
    const sort = getSortedValue();

    const pageWrap = document.querySelector('.page-wrap');
    const makeBtnInactive = btn => btn.classList.add('disabled-page-btn');
    const makeBtnActive = btn => btn.classList.remove('disabled-page-btn');
    
    document.querySelector('.pagination').style.display = 'flex';
    fillPagination(start, size);
    showActivePage(0);

    function fillPagination(start, result = null, size = 10) {
        pageWrap.innerHTML = ``;
        makeBtnInactive(pageBtn[0]);

        for (let i = 0; i < Math.ceil(total/size); i++) {
            if (i < 3) {
                pageWrap.innerHTML += `<b>${i+start}</b>`;
            } else if (i === 3 && i === Math.ceil(total/size) - 1) {
                pageWrap.innerHTML += `<b>${i+start}</b>`;
                break;
            } else if (result === 'end') {
                break;
            } else {
                pageWrap.innerHTML += `<span>...</span><b class="total">${Math.ceil(total/size)}</b>`;
                break;
            } 
        }        

        document.querySelectorAll('.page-wrap b:not([class="total"])').forEach( (el,index) => {            
            el.onclick = () => {
                increasePagination(el.textContent, index);
                getAllCharacters(input.value, sort, filter[0], filter[1], +el.textContent);
            }
        });

         //Decrease pagination
        pageBtn[0].onclick = function() {
            const currentPage = +document.querySelector('.active-page').textContent;
            let indexPage;
            document.querySelectorAll('.page-wrap b:not([class="total"])').forEach( (el,index) => {            
                 if (el.classList.contains('active-page')) indexPage = index;
            });

            if (currentPage === 3 && indexPage === 0 && Math.ceil(total/size) === 5) {
                fillPagination(currentPage-2);
                showActivePage(2);
            } else if (currentPage !== 1 && indexPage !== 0) {
                showActivePage(indexPage-1);
            } else if (currentPage !== 1 && indexPage === 0) {
                fillPagination(currentPage-3);
                showActivePage(2);
            }

            getAllCharacters(input.value, sort, filter[0], filter[1], +document.querySelector('.active-page').textContent);
            disableBtnBack();
            disableBtnFwd();
        }

       //Increase pagination
        pageBtn[1].onclick = () => {
            const currentPage = +document.querySelector('.active-page').textContent;
            let indexPage;
            document.querySelectorAll('.page-wrap b:not([class="total"])').forEach( (el,index) => {            
                 if (el.classList.contains('active-page')) indexPage = index;
            });

            if (currentPage+1 < Math.ceil(total/size)) {
                increasePagination(currentPage+1, indexPage+1);
            } else if (currentPage+1 === Math.ceil(total/size)) {
                showActivePage(indexPage+1);
            }

            getAllCharacters(input.value, sort, filter[0], filter[1], +document.querySelector('.active-page').textContent);
            disableBtnBack();
            disableBtnFwd();
        }
    }

    function increasePagination(el, index) {
        if (document.querySelector('.page-wrap span') && +el === +document.querySelector('.page-wrap .total').textContent-2) {
            fillPagination(+el, 'end');
            showActivePage(0);
        } else if (document.querySelector('.page-wrap span') && index > 2) {
            fillPagination(+el);
            showActivePage(0);
        } else {
            showActivePage(index);
        }
        
        disableBtnBack();
        disableBtnFwd();
    }

    function disableBtnFwd() {
        const page = document.querySelectorAll('.page-wrap b:not([class="total"])');
        if (page[page.length-1].textContent == Math.ceil(total/size) && page[page.length-1].classList.contains('active-page')) makeBtnInactive(pageBtn[1]);
        else makeBtnActive(pageBtn[1]);
    }

    function disableBtnBack() {
        const page = document.querySelectorAll('.page-wrap b:not([class="total"])');
        if (page[0].textContent == 1 && page[0].classList.contains('active-page')) makeBtnInactive(pageBtn[0]);
        else makeBtnActive(pageBtn[0]);
    }
}

function showActivePage(index) {
    const page = document.querySelectorAll('.page-wrap b:not([class="total"])');
    page.forEach(el => el.classList.remove('active-page'));
    page[index].classList.add('active-page');
}


export {createPagination};