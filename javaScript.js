const listOfContactsA = document.querySelector(".listOfContactsA");
const listOfContactsB = document.querySelector(".listOfContactsB");
const listOfContactsC = document.querySelector(".listOfContactsC");
const listOfContactsD = document.querySelector(".listOfContactsD");
const listOfContactsE = document.querySelector(".listOfContactsE");
const listOfContactsF = document.querySelector(".listOfContactsF");
const listOfContactsG = document.querySelector(".listOfContactsG");
const listOfContactsH = document.querySelector(".listOfContactsH");
const listOfContactsI = document.querySelector(".listOfContactsI");
const listOfContactsJ = document.querySelector(".listOfContactsJ");
const listOfContactsK = document.querySelector(".listOfContactsK");
const listOfContactsL = document.querySelector(".listOfContactsL");
const listOfContactsM = document.querySelector(".listOfContactsM");
const listOfContactsN = document.querySelector(".listOfContactsN");
const listOfContactsO = document.querySelector(".listOfContactsO");
const listOfContactsP = document.querySelector(".listOfContactsP");
const listOfContactsQ = document.querySelector(".listOfContactsQ");
const listOfContactsR = document.querySelector(".listOfContactsR");
const listOfContactsS = document.querySelector(".listOfContactsS");
const listOfContactsT = document.querySelector(".listOfContactsT");
const listOfContactsU = document.querySelector(".listOfContactsU");
const listOfContactsV = document.querySelector(".listOfContactsV");
const listOfContactsW = document.querySelector(".listOfContactsW");
const listOfContactsX = document.querySelector(".listOfContactsX");
const listOfContactsY = document.querySelector(".listOfContactsY");
const listOfContactsZ = document.querySelector(".listOfContactsZ");
const listOfContactsNoAlph = document.querySelector(".listOfContactsNoAlph");
const listOfContacts = document.querySelector(".contacts")
const addNewNumber = document.querySelector(".addNewNumber");
const allOfContact = document.querySelectorAll(".listOfContacts");

let conName;
let conNumber;
let letter;

listOfContacts.addEventListener('click' , deleteNumber);
listOfContacts.addEventListener('click' , addToLocFav);
listOfContacts.addEventListener('click' , changeColorStar);
document.addEventListener('DOMContentLoaded' , getContactOnLoad);

function changeColorStar(event) {
    let favConLoc;
    if (localStorage.getItem('favContacts')===null) {
        favConLoc = [];        
    } else {
        favConLoc = JSON.parse(localStorage.getItem('favContacts'))
    } 
    const item = event.target.parentElement;
    const contact = item.parentElement;
    console.log(contact);
    const conName = contact.querySelector('.newName').innerHTML;
    const conNumber = contact.querySelector('.newNumb').innerHTML;
    const favButton = contact.querySelector('.favButton');
    const infCon = {
        name:conName,
        number:conNumber,
    };

    favConLoc.forEach( function (cont) {
        if (cont.name === infCon.name) {
            favButton.innerHTML = '<img src="images/favourite.png" class="favoriteButtonIcon" alt="favorite">';
        }else{
            favButton.innerHTML = '<img src="images/favourite.svg" class="favoriteButtonIcon" alt="favorite">';
        }
    })
    
}

function checkForEmptyUl() {
    allOfContact.forEach(element => {
        if (element.childNodes.length < 6) {
            element.style.display = 'none';
        }else{
            element.style.display = 'block';
    
        }
    });
}


function deleteNumber(event) {
    const item = event.target;
    if (item.classList[0]==='trashButton') {
        const contact = item.parentElement;
        contact.classList.add('fade');

        setTimeout(() => {
            contact.remove();
        }, 1000);
        removeLocal(contact);
    }
}
// add to local favorite
function addToLocFav(event) {

    const item = event.target.parentElement;
    const contact = item.parentElement;
    const conName = contact.querySelector('.newName').innerHTML;
    const conNumber = contact.querySelector('.newNumb').innerHTML;
    const infCon = {
        name:conName,
        number:conNumber,
    };

    if (contact.classList[0]==='conNewItem') {
        let favContacts;
        let nameArry = [];

        if (localStorage.getItem('favContacts')===null) {
            favContacts = [];        
        } else {
            favContacts = JSON.parse(localStorage.getItem('favContacts'))
        }
        favContacts.forEach(elem => {
            nameArry.push(elem.name)
        });
        if (nameArry.includes(conName)) {
            const result = contact.innerHTML.split('</span>');
            const number = result[1].match(/\d/g).join("");
            const index = favContacts.findIndex(item=>item.number===number);
            favContacts.splice(index , 1);
            localStorage.setItem('favContacts' , JSON.stringify(favContacts));

        } else {
            favContacts.push(infCon);
            localStorage.setItem('favContacts' , JSON.stringify(favContacts));
        }


    }

}
//for local storage
function addToLocal(contact){
    let contacts;
    if (localStorage.getItem('contacts')===null) {
        contacts = [];        
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'))
    }
    contacts.push(contact)
    localStorage.setItem('contacts' , JSON.stringify(contacts));
}
function removeLocal(contact) {
    let contacts;
    if (localStorage.getItem('contacts')===null) {
        contacts = [];        
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'))
    } 
    console.log(contact.children[0]);
    const result = contact.innerHTML.split('</span>');
    const number = result[1].match(/\d/g).join("");
    const index = contacts.findIndex(item=>item.number===number);
    contacts.splice(index , 1);
    localStorage.setItem('contacts' , JSON.stringify(contacts));



}
function getContactOnLoad() {
    let contacts;
    let favConLoc;
    if (localStorage.getItem('contacts')===null) {
        contacts = [];        
    } else {
        contacts = JSON.parse(localStorage.getItem('contacts'))
    } 
    if (localStorage.getItem('favContacts')===null) {
        favConLoc = [];        
    } else {
        favConLoc = JSON.parse(localStorage.getItem('favContacts'))
    } 

    contacts.forEach(function(contact) {
        const newDiv = document.createElement('div');
        const newItem = document.createElement('li');
        const newName = document.createElement('span');
        const newNumber = document.createElement('span');
        const trashButton = document.createElement('button');
        const favButton = document.createElement('button');

        trashButton.innerHTML = '<img src="images/trash.jpg" class="trashButtonIcon" alt="trash">';
        favButton.innerHTML = '<img src="images/favourite.svg" class="favoriteButtonIcon" alt="favorite">';
        newName.innerText = contact.name;
        newNumber.innerText = contact.number;
        letter = contact.name.charAt(0);
        letter = letter.toLowerCase();

        newDiv.classList.add('newCon');
        newItem.classList.add('conNewItem');
        newName.classList.add('newName');
        newNumber.classList.add('newNumb');
        trashButton.classList.add('trashButton');
        favButton.classList.add('favButton');


        newItem.appendChild(newName);
        newItem.appendChild(newNumber);
        newDiv.appendChild(newItem);
        newDiv.appendChild(trashButton);
        newItem.appendChild(favButton);

        favConLoc.forEach( function (cont) {
            if (cont.name === contact.name) {
                favButton.innerHTML = '<img src="images/favourite.png" class="favoriteButtonIcon" alt="favorite">';
            }
        })



        switch (letter) {
            case 'a':
                listOfContactsA.appendChild(newDiv);
                break;
            case 'b':
                listOfContactsB.appendChild(newDiv);
                break;
            case 'c':
                listOfContactsC.appendChild(newDiv);
                break;
            case 'd':
                listOfContactsD.appendChild(newDiv);
                break;
            case 'e':
                listOfContactsE.appendChild(newDiv);
                break;
            case 'f':
                listOfContactsF.appendChild(newDiv);
                break;
            case 'g':
                listOfContactsG.appendChild(newDiv);
                break;
            case 'h':
                listOfContactsH.appendChild(newDiv);
                break;
            case 'i':
                listOfContactsI.appendChild(newDiv);
                break;
            case 'j':
                listOfContactsJ.appendChild(newDiv);
                break;
            case 'k':
                listOfContactsK.appendChild(newDiv);
                break;
            case 'l':
                listOfContactsL.appendChild(newDiv);
                break;
            case 'f':
                listOfContactsF.appendChild(newDiv);
                break;
            case 'g':
                    listOfContactsG.appendChild(newDiv);
                    break;
            case 'h':
                listOfContactsH.appendChild(newDiv);
                break;
            case 'i':
                listOfContactsI.appendChild(newDiv);
                break;
            case 'j':
                listOfContactsJ.appendChild(newDiv);
                break;
            case 'k':
                listOfContactsK.appendChild(newDiv);
                break;
            case 'l':
                listOfContactsL.appendChild(newDiv);
                break;
            case 'm':
                listOfContactsM.appendChild(newDiv);
                break;
            case 'n':
                listOfContactsN.appendChild(newDiv);
                break;
            case 'o':
                listOfContactsO.appendChild(newDiv);
                break;
            case 'p':
                listOfContactsP.appendChild(newDiv);
                break;
            case 'q':
                listOfContactsQ.appendChild(newDiv);
                break;
            case 'r':
                listOfContactsR.appendChild(newDiv);
                break;
            case 's':
                listOfContactsS.appendChild(newDiv);
                break;
                    case 'm':
                listOfContactsM.appendChild(newDiv);
                break;
            case 'n':
                listOfContactsN.appendChild(newDiv);
                break;
            case 'o':
                listOfContactsO.appendChild(newDiv);
                break;
            case 'p':
                listOfContactsP.appendChild(newDiv);
                break;
            case 'q':
                listOfContactsQ.appendChild(newDiv);
                break;
            case 'r':
                listOfContactsR.appendChild(newDiv);
                break;
            case 's':
                listOfContactsS.appendChild(newDiv);
                break;
            case 't':
                listOfContactsT.appendChild(newDiv);
                break;
            case 'u':
                listOfContactsU.appendChild(newDiv);
                break;
            case 'v':
                listOfContactsV.appendChild(newDiv);
                break;
            case 'w':
                listOfContactsW.appendChild(newDiv);
                break;
            case 'x':
                listOfContactsX.appendChild(newDiv);
                break;
            case 'y':
                listOfContactsY.appendChild(newDiv);
                break;
            case 'z':
                listOfContactsZ.appendChild(newDiv);
                break;
                                                                    
            default:
                listOfContactsNoAlph.appendChild(newDiv);
                break;
        }

    })
}
let li;
document.addEventListener("DOMContentLoaded" , function (e) {
    li = document.getElementsByClassName("newCon");
})
function searchNumber() {

    input = document.getElementById("searchBarId");
    filter = input.value.toUpperCase();

    for (i = 0; i < li.length; i++) {
        a = li[i].innerText.toUpperCase();
        if (a.includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}


