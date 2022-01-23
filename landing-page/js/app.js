/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sections = document.querySelectorAll('section');
const landingPageSections = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function Lists(){
sections.forEach((section)=> {
    let name = document.createElement('li');
    let link = document.createElement('a');
    link.textContent= section.dataset.nav;
    name.appendChild(link);
    landingPageSections.appendChild(name);
});
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




function active(){
    for (const section of sections){
        const area = section.getBoundingClientRect();
        if (area.top <= 150 && box.bottom >= 150){
            elemet.classList.add("your-active-class");
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

document.addEventListener("scroll", function() {
    active();
  });




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
Lists();

// Scroll to section on link click

// Set sections as active




