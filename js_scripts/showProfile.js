const characterId = new URLSearchParams(window.location.search).get('id');
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const getProfile = async (characterId) => {
    const res = await fetch(`php_scripts/get_profile.php?id=${characterId}`);
    const data = await res.json();
    addContent(data);
}

getProfile(characterId);


function addContent(data) {
    const profile = document.querySelector('.profile');
    
    document.querySelector('title').textContent = capitalizeFirstLetter(data[0].name);
    document.body.style.backgroundImage = `url(img/site/${data[0].category}-bg.jpg)`;

    profile.innerHTML += `
    <img src="img/characters/${data[0].image}" alt="${data[0].name}">
    <ul>
        <li><b>${data[0].name}</b></li>
        <li>${data[0].age}</li>
        <li>${data[0].gender}</li>
    </ul>
    <div class="info">${data[0].info}</div>`;
}
