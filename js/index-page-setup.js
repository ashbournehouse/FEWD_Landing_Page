/***************************************************/
/* This JS file is for page setup tasks            */
/*                                                 */
/* This needs to run after the page has loadeded   */
/*  so will get called at the end of the index     */
/*  page source.                                   */
/***************************************************/


/*** Declare global variables *******************************************************************/

const listOfBlogCards = document.getElementsByClassName('blog-card');
let listOfBlogCardIds = [];

/*** Convert the list of blog cards to an array of strings **************************************/

for (let i = 0; i < listOfBlogCards.length; i++) {
    listOfBlogCardIds.push(listOfBlogCards[i].id);
}

const navbarElement = document.getElementById('navbar');

/*** Log the list to the cosole for debugging purposes ******************************************/

console.log('**************');
listOfBlogCardIds.forEach (function(item) {
	console.log(item);
})
console.log('**************');

/*** End debugging section **********************************************************************/

/*** Create the navbar title ********************************************************************/

const navbarTitleDiv = document.createElement('div');
navbarTitleDiv.className = 'title-container';
navbarTitleDiv.innerHTML = '<h4>Quick Navigation</h4>';

/*** Create a 'div' to contain all the navigation links *****************************************/

const quickLinksDiv = document.createElement('ul');
quickLinksDiv.className = 'navbar-button-container';

/*** Create and append the navigation links *****************************************************/

listOfBlogCardIds.forEach (function(item) {

		/*** Create a list item to hole the blog card link ***********************/
	let newListItem = document.createElement('li');
	newListItem.className = 'list-item-link-container';

		/*** Create a link to each blog card *************************************/

	let newQuicklink = document.createElement('a');
	newQuicklink.href = '#' + item;
	let dateString = "";
		/* console.log(typeof item) */
	dateString = item.substring(8,10) + '/' + item.substring(5,7) + '/' + item.substring(0,4);
	newQuicklink.innerHTML = dateString;
	newQuicklink.className = 'button navbar-button';
	quickLinksDiv.appendChild(newQuicklink);

		/*** Add the link to the list item and the list item to the list *********/
	newListItem.appendChild(newQuicklink);
	quickLinksDiv.appendChild(newListItem);

});

/*** Now append both title and links to the navbar **********************************************/

navbarElement.appendChild(navbarTitleDiv);
navbarElement.appendChild(quickLinksDiv);

/*** NOTE ****************************************************************************************
/*     Having set up the links in an unordered list, the 'behaviour' is passed over to
/*     an 'onhashchange' event handler to try and centre the relevant card in the browser
/*     window. (see 'index-event-behaviours.js')
/************************************************************************************************/

/*** DONE ... for now !! ************************************************************************/


/* ==================================================================================

Scroll to centre a div in position ....

==================================================================================

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

let divTop = document.getElementById('2021-01-10').documentOffsetTop() - (window.innerHeight / 2 );

console.log('top is: ' + divTop);

window.scrollTo( 0, divTop );

console.log('We should have scrolled to 12/01/2021');

/* =============================================================================== */



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

