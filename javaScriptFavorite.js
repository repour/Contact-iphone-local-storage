let bodyFavCon = document.querySelector('.bodyFavCon');
console.log(bodyFavCon);
document.addEventListener('DOMContentLoaded' , getContactOnLoad);

function getContactOnLoad() {
    let favContacts;
    if (localStorage.getItem('favContacts')===null) {
        favContacts = [];        
    } else {
        favContacts = JSON.parse(localStorage.getItem('favContacts'))
    } 
    favContacts.reverse();
    favContacts.forEach(function(contact) {
        const newDiv = document.createElement('div');
        const newItem = document.createElement('li');
        const conImage = document.createElement('span');
        const newName = document.createElement('span');
        const newNumber = document.createElement('span');
        const conImageText = contact.name[0].toUpperCase();

    
        conImage.innerText = conImageText;
        newName.innerText = contact.name;
        newNumber.innerText = contact.number;

        newDiv.classList.add('newCon');
        newItem.classList.add('favNewItem');
        newName.classList.add('newName');
        newNumber.classList.add('newNumb');
        conImage.classList.add('conImage');

        newItem.appendChild(conImage);
        newItem.appendChild(newName);
        newItem.appendChild(newNumber);
        newDiv.appendChild(newItem);
        bodyFavCon.appendChild(newDiv);

    })
}