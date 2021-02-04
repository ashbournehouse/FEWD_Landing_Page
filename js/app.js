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
 * Define Global Variables
 *
*/
const listOfBlogCards = document.querySelectorAll('.blog-card');
let listOfBlogCardIds = [];

for (let i = 0; i < listOfBlogCards.length; i++) {
    	/* console.log('i is: ' + i); */
    	/* console.log(listOfBlogCards[i].id); */
    listOfBlogCardIds.push(listOfBlogCards[i].id);
}

/* console.log(listOfBlogCardIds) */

let idList = document.createElement('p');
idList.textContent = listOfBlogCardIds.toString();

const myAnchorElement = document.querySelector('#navbar');
	/* console.log(myAnchorElement); */
	/*myAnchorElement.appendChild(idList);*/

console.log('**************');
listOfBlogCardIds.forEach (function(item) {
	console.log(item)
})

/*** Create a 'div' t contain all the navigation links *******************************************/

const dynamicNavDiv = document.createElement('div');
dynamicNavDiv.className = 'navbar-button-container';

/*** Create and append the navigation links *****************************************************/

listOfBlogCardIds.forEach (function(item) {
	let newButton = document.createElement('a');
	newButton.href = '#' + item;
	let dateString = "";
		/* console.log(typeof item) */
	dateString = item.substring(8,10) + '/' + item.substring(5,7) + '/' + item.substring(0,4)
	newButton.innerHTML = dateString;
	newButton.className = 'button navbar-button';
	dynamicNavDiv.appendChild(newButton);
});

/*** Now append the whole thing to the 'nav-title' *********************************************/

myAnchorElement.appendChild(dynamicNavDiv)


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



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

// Scroll to section on link click

// Set sections as active

