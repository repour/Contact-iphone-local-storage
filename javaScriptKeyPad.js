const addNumberText = document.querySelector(".addNumberText");
const addToRecent = document.querySelector(".call")

addToRecent.addEventListener('click' , addToRec);
addNumberText.addEventListener('click' , addPhoneToLocal)

function addToNumberHolder(value){
document.getElementById('numberHold').value += value;
if (document.getElementById('numberHold').value !== "") {
    document.getElementById('addNumberText').style.visibility = 'visible';
    document.getElementById('removeNumber').style.visibility = 'visible';
}else{
    document.getElementById('addNumberText').style.visibility = 'hidden' ;
    document.getElementById('removeNumber').style.visibility = 'hidden' ;
}
}
function removeNumber() {
let letter = document.getElementById('numberHold').value;
document.getElementById('numberHold').value = letter.substr(0 , letter.length-1);;
if (document.getElementById('numberHold').value !== "") {
    document.getElementById('addNumberText').style.visibility = 'visible';
    document.getElementById('removeNumber').style.visibility = 'visible';

}else{
    document.getElementById('addNumberText').style.visibility = 'hidden' ;
    document.getElementById('removeNumber').style.visibility = 'hidden' ;

}
};
function addPhoneToLocal(){
    let phoneNumber = document.getElementById('numberHold').value;
    localStorage.setItem('phoneNumber' , JSON.stringify(phoneNumber));
};
function addToRec() {
    let recNumb = document.getElementById('numberHold').value
    let recentNumber;
    if (localStorage.getItem('recentNumber')===null) {
        recentNumber = [];        
    } else {
        recentNumber = JSON.parse(localStorage.getItem('recentNumber'))
    }
    recentNumber.push(recNumb)
    localStorage.setItem('recentNumber' , JSON.stringify(recentNumber));

}