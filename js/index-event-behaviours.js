//***************************************************
// This JS file is for event driven behaviours     **
//                                                 **
// I'm going to put it at the top of the index     **
//  source code jus to get familiar wih doing      **
//  things tha way.                                **
//***************************************************

console.log('Event behavoiurs script installed(?) if that is a suitable term');

//*******************************************************************************************
// Prototypes DO NOT get hoisted ... it seems
//   This returns the offset of an element from the top of the document
//   (it's recursive so might be expensive in time??)
//*******************************************************************************************

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

//*******************************************************************************************
// Set up a listener on the home button
//*******************************************************************************************

let homeButton = document.querySelector('.home-button');
if (homeButton) {
		//console.log("Home button found");
	homeButton.addEventListener('click', function(event) {homeButtonOnClick()} );
};

//*******************************************************************************************
// Set listeners on each blog card to highlght when clicked
//*******************************************************************************************
let blogCards = document.querySelectorAll('.blog-card');

for(var i=0; i < blogCards.length; i++) {
	blogCards[i].addEventListener('click', function(event) {blogCardOnClick(event)});
};

//*******************************************************************************************
// The behaviour of this page is governed by the scroll action. Javascript doesn't give
// us a onScrollStop action so we need to use a timer and the setTimeout() method.
//
// setTimeout() returns a numeric ID for the timer that has been set (there can be many
// timers running).
//
// So we need a variable in which to store the ID and then set up the timer behaviour
// as the window is scrolled.
//*******************************************************************************************

let currentScrollTimerId;

//*******************************************************************************************
// Now set a listener on the window scroll events
//  acknowledging help from: https://gomakethings.com/
//    detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
//*******************************************************************************************

window.addEventListener('scroll', function(event) {scrollEventHandler()}, false);

			//*******************************************************************************************
			// ^^^ The final parameter 'passive' here = 'false' is associated with scrolling
			// performance, however developer.mozilla.org says this:
			//
			//  'You don't need to worry about the value of passive for the basic scroll event. Since
			//   it can't be canceled, event listeners can't block page rendering anyway.'
			//*******************************************************************************************

//*******************************************************************************************
// Now set a listener on the window resize events
//*******************************************************************************************

window.addEventListener('resize', function(event) {
	console.log("Window resize listener added")
});

//*******************************************************************************************
//** Scroll 'div' anchored bog cards so that they are centred in the visible window *********

window.addEventListener("hashchange", function() {
	console.log('******************************')
	console.log('Running hashchange handler ...')
	console.log('******************************')
	scrollTargetDivIntoView();
});

//*******************************************************************************************
//** Place functions down here for readability, they will get 'hoisted' *********************
//*******************************************************************************************

function scrollEventHandler() {
		// Clear the current timer if the window is scrolling
	window.clearTimeout(currentScrollTimerId);
		// Now perform any actions required when window starts scrolling
		//   * this could probably optimised to run only ONCE with each scroll
		//   * if performance becomes an issue.
		//   *  see maybe:
		//   *   https://davidwalsh.name/javascript-debounce-function
	noramliseBlogCardsWhenScrollingStarts();
		// If scrolling has stopped for long enough (e.g. 75 mSecs) perform
		//  the actions required when scrolling stops (as a 'callback')
	currentScrollTimerId = setTimeout(function() {
			// Here's the callback
		dimBlogCardsWhenScrollingStops();
		highlightBlogCardInTheMiddleOfTheWindow ();
		  // ... and this is debugging, helping me learn how this stuff works.
		console.log('===============================================');
		console.log('Scrolling has stopped.');
		console.log('Type of isScrolling is: ' + typeof(currentScrollTimerId) );
		console.log('Value of isScrolling is: ' + currentScrollTimerId );
	}, 75); // The final parameter (here) is the timeout value.
};

//*******************************************************************************************

function scrollTargetDivIntoView() {

	console.log('*****************************************');
	console.log('Entering scrollTargetDivIntoView ...');
	console.log(' Current hash is: ' + document.location.hash);
	console.log(' Type is: ' + (typeof document.location.hash));
	const targetDiv = document.querySelector(document.location.hash);
	console.log('targetDiv is: ' + (targetDiv.id));

	let targetDivOffsetTop = targetDiv.documentOffsetTop();
	let targetDivHeight = targetDiv.offsetHeight;
	let windowHeight = window.innerHeight;  // This doesn't seem to update as window is resized?
	let scrollTargetY = 0;

	if (targetDivHeight < windowHeight) {
			//********************************************************************
			// Target div fits in the window ... scroll to middle
			//********************************************************************
		scrollTargetY = targetDivOffsetTop + (targetDivHeight - windowHeight)/2;
	}
	else {
			//********************************************************************
			// Target div bigger than the window ...scroll to top
			//********************************************************************
		scrollTargetY = targetDivOffsetTop - (windowHeight * 0.05);
	};
	window.scrollTo(window.scrollX, scrollTargetY);

		// Hightlighting is handled by the scrolling handlers

	console.log('Leaving scrollTargetDivIntoView ...');
	console.log('*****************************************');

}

//*******************************************************************************************

function noramliseBlogCardsWhenScrollingStarts (event) {
		console.log("================================================");
		console.log("Entering noramliseBlogCardsWhenScrollingStarts");
		if (window.scrollY != 0) {
			blogCardsToReset = document.querySelectorAll('.blog-card');
			for (let lc1 = 0; lc1 < blogCardsToReset.length; lc1++){
				console.log('Class of blogCardsToReset[lc1] is: ' + blogCardsToReset[lc1].className);
				blogCardsToReset[lc1].className = 'blog-card';
			}
		}
		console.log("Leaving noramliseBlogCardsWhenScrollingStarts");
		console.log("================================================");
}

//*******************************************************************************************

function dimBlogCardsWhenScrollingStops (event) {
		console.log("================================================");
		console.log("Entering dimBlogCardsWhenScrollingStops");
		if (window.scrollY != 0) {
			blogCardsToReset = document.querySelectorAll('.blog-card');
			for (let lc1 = 0; lc1 < blogCardsToReset.length; lc1++){
				console.log('Class of blogCardsToReset[lc1] is: ' + blogCardsToReset[lc1].className);
				blogCardsToReset[lc1].className = 'blog-card blog-card-dimmed';
			}
		}
		console.log("Leaving dimBlogCardsWhenScrollingStops");
		console.log("================================================");
}

//*******************************************************************************************

function highlightBlogCardInTheMiddleOfTheWindow (event) {
		console.log("================================================");
		console.log("Entering highlightBlogCardInTheMiddleOfTheWindow");
		let blogCardCentreY = 0;
		let blogCardOffsetY = window.innerHeight; // a safe big value!!
		let screenCentreY = (window.innerHeight / 2 );
		let mostCentralBlogCardId = '';
		let currentSmallestOffset;
		blogCardsToCheck = document.querySelectorAll('.blog-card');
			for (let lc1 = 0; lc1 < blogCardsToCheck.length; lc1++){
				 // Get distance of top of blog card div from centre of window
				blogCardCentreY = (blogCardsToCheck[lc1].getBoundingClientRect().top + blogCardsToCheck[lc1].getBoundingClientRect().bottom)/2;
				 // And find its offset from the centre of the screen
				blogCardOffsetY = Math.abs(screenCentreY - blogCardCentreY)

				console.log(blogCardsToCheck[lc1].id + ' is at: ' + blogCardCentreY);
				if (mostCentralBlogCardId != '') {
					if (blogCardOffsetY < currentSmallestOffset) {
						mostCentralBlogCardId = blogCardsToCheck[lc1].id;
					  currentSmallestOffset = blogCardOffsetY;
					}
				}
				else {
					mostCentralBlogCardId = blogCardsToCheck[lc1].id;
					currentSmallestOffset = blogCardOffsetY;
				}
			}
		console.log('Centred blog card is: ' + mostCentralBlogCardId + ' at: ' + currentSmallestOffset);
		blogCardToHighlight = document.getElementById(mostCentralBlogCardId);
		blogCardToHighlight.className = 'blog-card blog-card-highlighted';
		console.log("Leaving highlightBlogCardInTheMiddleOfTheWindow");
		console.log("================================================");
}

//*******************************************************************************************

function blogCardOnClick (event) {
		console.log("========================");
		console.log("Entering blogCardOnClick");
	if (foundBlogCard = hasAncestorWithClass(event.target, 'blog-card')) {
				// Dim all the other blog cards
			blogCardsToDim = document.querySelectorAll('.blog-card');
			for (let lc1 = 0; lc1 < blogCardsToDim.length; lc1++){
				console.log('Class of blogCardsToDim[lc1] is: ' + blogCardsToDim[lc1].className);
				blogCardsToDim[lc1].className = 'blog-card blog-card-dimmed';

			}
			//console.log('Found blog card class is: ' + foundBlogCard.className)
		foundBlogCard.className = 'blog-card blog-card-highlighted';
			//console.log('Class changed to: ' + foundBlogCard.className)
	}
		console.log("Leaving blogCardOnClick");
		console.log("========================");
}

//*******************************************************************************************

function homeButtonOnClick (event) {
	console.log("==========================");
	console.log("Entering homeButtonOnClick");
		// Remove the current anchor from the URL
	history.pushState("", document.title, window.location.pathname + window.location.search);
		// ... and scroll to the top
	window.scrollTo(window.scrollX, 0);
	console.log("Leaving homeButtonOnClick");
	console.log("==========================");
}

//*******************************************************************************************

function hasAncestorWithClass(thisElement, thisName) {
	if (foundBlogCard = event.target.closest('.' + thisName)) {
			//console.log(event.target + ' has a parent with class ' + thisName);
		return foundBlogCard;
	}
	else {
			//console.log(event.target + ' has NO parent with class ' + thisName);
		return false;
	}
}

