const phoneNumber = JSON.parse(localStorage.getItem('phoneNumber'));
if (phoneNumber !== "") {
    document.querySelector('.phoneNumber').value = phoneNumber;
}
const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const phoneNumb = document.querySelector(".phoneNumber");
const saveNumber = document.querySelector(".doneInModule");
const cancelForm = document.querySelector(".cancelInModule")

console.log(firstName.value);
saveNumber.addEventListener('click', getNumber);

function getNumber(event) {

    conName = firstName.value + " " + lastName.value;
    conNumber = phoneNumb.value;

    addToLocal ({
        name: conName,
        number: conNumber
    });

};
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
