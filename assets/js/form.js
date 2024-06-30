const user = document.querySelector('#username');
const submitBtn = document.querySelector('#submit');

let userData = localStorage.getItem('userData');

user.textcontent = userData;

submitBtn.addEventListener('click', function () {
    let userData = user.value
    user.textcontent = userData;
    localStorage.setItem('userData', userData);
});