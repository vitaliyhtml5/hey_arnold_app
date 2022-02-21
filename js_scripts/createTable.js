import {getDefault} from './script.js';

const createTable = data => {
    const table = document.querySelector('.table-wrap tbody');
    const emptyTable = document.querySelector('.empty-table');

    data.message === 'no results found' ? showEmptyTable(data.message) : fillTable(data.characters);

    function fillTable(data) {
        emptyTable.style.display = 'none';
        table.innerHTML = ``;
        for (let i = 0; i < data.length; i++) {
            table.innerHTML += `
            <tr>
                <td>
                    <a href="./character.php?id=${data[i].id}">
                        <img src="img/characters/${data[i].image}" alt="${data[i].name}">
                        <span>${data[i].name}</span>
                    </a>
                </td>
                <td>${data[i].age}</td>
                <td>${data[i].gender}</td>
            </tr>`;
        }
    }

    function showEmptyTable(text) {
        document.querySelector('.pagination').style.display = 'none';
        emptyTable.style.display = 'flex';
        document.querySelector('.empty-table b').textContent = text;
        document.querySelector('.empty-table button').onclick = () => getDefault();
    }
}

export {createTable};