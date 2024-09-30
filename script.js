const submit =document.getElementById('submitbtn');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const subject = document.getElementById('subject');
submit.addEventListener('click',()=>{
    console.log(name.value);
    console.log(email.value);
    console.log(phone.value);
    console.log(subject.value);
})