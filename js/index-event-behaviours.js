/***************************************************/
/* This JS file is for event driven behaviours     */
/*                                                 */
/* I'm going to put it at the top of the index     */
/*  source code jus to get familiar wih doing      */
/*  things tha way.                                */
/***************************************************/

console.log('Event behavoiurs script installed(?) if that is a suitable term');

/*******************************************************************************************/
/*** Prototypes DO NOT get hoisted ... it seems                *****************************/

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

/*******************************************************************************************/
/*** What about event handlers? These seem to work anywhere in the code source *************/

window.addEventListener("hashchange", function() {
	console.log('******************************')
	console.log('Running hashchange handler ...')
	console.log('******************************')
	scrollTargetDivToWindowCentre();
});



/*******************************************************************************************/
/*** Declare global variables **************************************************************/
	/* Use the header 'name' as a dummy link *******/
const myName = document.getElementById('myName');
	/* Decide which div to target ******************/
const myTargetDivId = '2021-01-11'

/*******************************************************************************************/
/*** Instal some test event handlers for each blog card ************************************/

let blogCards = document.querySelectorAll('.blog-card');

for(var i=0; i<blogCards.length; i++){
	blogCards[i].onmouseover = changeCardColor;
  blogCards[i].onmouseout = restoreCardColor;
 	};

/*** Test scrolling using a single div  *****************************************************/

const myDiv = document.getElementById(myTargetDivId);
console.log('myDiv is: ' + (myDiv.id));
	/* Work out where to scroll to *****************/
const myDivOffsetTop = myDiv.documentOffsetTop();
const myDivHalfHeight = (myDiv.offsetHeight / 2);
	/* Find the centre of the window ***************/
let halfWindowHeight = (window.innerHeight / 2 );  /* This doesn't seem to update as window is resized */
console.log('Fixed half window height :' + halfWindowHeight);

let scrollTarget = myDivOffsetTop + myDivHalfHeight - halfWindowHeight;

/*******************************************************************************************/
/*** This is just a dummy link using the page title ****************************************/

myName.onclick = function(){
  console.log('Scrolling target is: ' + scrollTarget);
  window.scrollTo( 0, scrollTarget);
  myDiv.className = ('blog-card blog-card-highlighted')
  console.log('We should have scrolled to : + myTargetDivId');
	};

/*******************************************************************************************/
/*** Place functions down here for readability, they will get 'hoisted' ********************/
/*******************************************************************************************/

function changeCardColor (event) {
	console.log("Entering changeCardColor");
	if (foundBlogCard = hasAncestorWithClass(event.target, 'blog-card')) {
		console.log('Found blog card class is: ' + foundBlogCard.className)
		foundBlogCard.className = 'blog-card blog-card-hover';
		console.log('Class changed to: ' + foundBlogCard.className)
	}
	console.log("Leaving changeCardColor");
}

/*******************************************************************************************/

function restoreCardColor (event) {
	console.log("Entering changeCardColor");
	if (foundBlogCard = hasAncestorWithClass(event.target, 'blog-card')) {
		console.log('Found blog card class is: ' + foundBlogCard.className)
		foundBlogCard.className = 'blog-card';
		console.log('Class changed to: ' + foundBlogCard.className)
	}
	console.log("Leaving changeCardColor");
}

/*******************************************************************************************/

function hasAncestorWithClass(thisElement, thisName) {
	if (foundBlogCard = event.target.closest('.' + thisName)) {
		console.log(event.target + ' has a parent with class ' + thisName);
		return foundBlogCard;
	}
	else {
		console.log(event.target + ' has NO parent with class ' + thisName);
		return false;
	}
}

/*******************************************************************************************/

function scrollTargetDivToWindowCentre() {

	console.log('*****************************************');
	console.log('Running scrollTargetDivToWindowCentre ...');
	console.log(' Current hash is: ' + document.location.hash);
	console.log(' Type is: ' + (typeof document.location.hash));
	console.log('*****************************************');
	const targetDiv = document.querySelector('#2021-01-09');
	console.log('targetDiv is: ' + (targetDiv.id));

		/* Work out where to scroll to *****************
	const targetDivOffsetTop = targetDiv.documentOffsetTop();
	const targetDivHalfHeight = (targetDiv.offsetHeight / 2);
		/* Find the centre of the window ***************
	let halfWindowHeight = (window.innerHeight / 2 );  /* This doesn't seem to update as window is resized
	console.log('Fixed half window height :' + halfWindowHeight);
	console.log('*****************************************')

	let scrollTarget = myDivOffsetTop + myDivHalfHeight - halfWindowHeight;

	*/

	window.scrollTo(window.scrollX, window.scrollY + 2000);
}


