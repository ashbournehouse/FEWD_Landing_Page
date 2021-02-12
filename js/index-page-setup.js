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

  //console.log('**************');
listOfBlogCardIds.forEach (function(item) {
	  //console.log(item);
})
  //console.log('**************');

/*** End debugging section **********************************************************************/

/*** Create the navbar title ********************************************************************/

const navbarTitleDiv = document.createElement('div');
navbarTitleDiv.className = 'title-container';
navbarTitleDiv.innerHTML = '<h4>Jump to blog entries ...</h4>';

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
		//console.log(typeof item)
		// dateString = item.substring(8,10) + '/' + item.substring(5,7) + '/' + item.substring(0,4); */
	dateString = item.substring(9,11) + '/' + item.substring(6,8) + '/' + item.substring(1,5);
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

fixSafariGridHeights();

function fixSafariGridHeights() {

	  //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
	  //console.log("Entering fixSafariGridHeights")

	let divHeightsToFix = document.querySelectorAll('.blog-card-content');
	for (let lc1 = 0; lc1 < divHeightsToFix.length; lc1++){
		let articleElement = divHeightsToFix[lc1].querySelector('.blog-card-article')
		  //console.log(`divHeightsToFix[lc1] is: ${divHeightsToFix[lc1]}`)
		  //console.log(`articleElement is: ${articleElement}`)
		  //console.log(`articleElement height is: ${articleElement.offsetHeight}`)
		divHeightsToFix[lc1].style.height = `${articleElement.offsetHeight}px`;

	  //console.log("Leaving fixSafariGridHeights")
	  //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

	}

}

//*******************************************************************************************

