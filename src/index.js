import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

//modal window resume
const modal = document.querySelector('.modal-resume');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpensModal = document.querySelector('.cta-btn--resume'); //selected all elements with same class

// // EVENT LISTENERSSSSSS------------------------------------------------------------------------
// for (let i = 0; i < btnsOpensModal.length; i++) 
//     btnsOpensModal[i].addEventListener('click', function () { 
//         modal.classList.remove('hidden') 
//         overlay.classList.remove('hidden')
//     }); 

btnsOpensModal.addEventListener('click', function(){
    modal.classList.remove('hidden') 
    overlay.classList.remove('hidden')
})

//CLOSING THE MODAL WINDOW---------------------------------------------------------------------
const closeModal = function () {
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
} 

btnCloseModal.addEventListener('click', closeModal); 
overlay.addEventListener('click', closeModal); 

// HANDLING THE ESC KEYBOARD PRESS to close Modal Window---------------------------------------
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});



//email button event handler
const email = 'landing22287@gmail.com';
const emailBtn = document.getElementById('email-btn');
const copyBtn = document.querySelector('.copy-btn')

emailBtn.addEventListener('click', function() {
    emailBtn.textContent = email;
    copyBtn.hidden = false;
});
copyBtn.addEventListener('click', function() {
    emailBtn.textContent = 'Copied';
    setTimeout(function() {
        emailBtn.textContent = email}, 1000)
    navigator.clipboard.writeText(email);
})



// ////////////////////////////////////////////////////////////
// const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const toggleIcon = document.getElementById('toggle-icon');

// const DARK_THEME = 'dark';
// const LIGHT_THEME = 'light';

// //the localStorage part
// let time = new Date().getHours(); //what time is it now?
// const lStorage = localStorage.getItem('theme');

// if (lStorage) {
//     toggleTheme(lStorage);
// } else if (!(time >= 8 && time <= 19)) toggleTheme(DARK_THEME); /* why check if is NOT day? 
// I can only check hours before midnight, cause at that poit the clock reset to 0 and it's a mess */


// function toggleTheme(theme, user = false) {
//     const isDark = (theme === 'dark'); //creating boolean
//     //toggle the switch
//         if (isDark) toggleSwitch.checked = true;
//     //set the data-theme attribute at the HTML root
//         document.documentElement.setAttribute('data-theme', `${theme}`);
//     //change toggle switch text and icon
//         toggleIcon.children[0].textContent = `${isDark ? 'Dark' : 'Light'} Mode`;
//         isDark ? toggleIcon.children[1].classList.replace('fa-sun-o', 'fa-moon-o') :
//             toggleIcon.children[1].classList.replace('fa-moon-o', 'fa-sun-o')

//     //set local storage only in case of direct user interaction
//         if (user) localStorage.setItem('theme', `${theme}`)
// };


// //switcher (the event is the checkbox click)
// function switchTheme(event) {
//     if (event.target.checked) {
//         toggleTheme(DARK_THEME, true);
//     } else toggleTheme(LIGHT_THEME, true);
// };

// //event listener on the switch button
// toggleSwitch.addEventListener('change', switchTheme)
