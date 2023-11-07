const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnHome = document.querySelector('btnHome');
const MissPassword = document.querySelector('.miss-password');
const loginLinkS = document.querySelector('.logins-link');

MissPassword.addEventListener('click',()=>{
    wrapper.classList.add('misspass'); 
});
loginLinkS.addEventListener('click',()=>{
    wrapper.classList.remove('misspass');
    wrapper.classList.remove('active');
    
});



registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');

});

