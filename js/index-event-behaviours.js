/***************************************************/
/* This JS file is for event driven behaviours     */
/*                                                 */
/* I'm going to put it at the top of the index     */
/*  source code jus to get familiar wih doing      */
/*  things tha way.                                */
/***************************************************/

console.log('Event behavoiurs script installed(?) if that is a suitable term');

function changeCardColor (event) {
	console.log("Entering changeCardColor");
	if (foundBlogCard = hasAncestorWithClass(event.target, 'blog-card')) {
		console.log('Found blog card class is: ' + foundBlogCard.className)
		foundBlogCard.className = 'blog-card blog-card-hover';
		console.log('Class changed to: ' + foundBlogCard.className)
	}
	console.log("Leaving changeCardColor");
}

function restoreCardColor (event) {
	console.log("Entering changeCardColor");
	if (foundBlogCard = hasAncestorWithClass(event.target, 'blog-card')) {
		console.log('Found blog card class is: ' + foundBlogCard.className)
		foundBlogCard.className = 'blog-card';
		console.log('Class changed to: ' + foundBlogCard.className)
	}
	console.log("Leaving changeCardColor");
}

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


let blogCards = document.querySelectorAll('.blog-card');

for(var i=0; i<blogCards.length; i++){
	blogCards[i].onmouseover = changeCardColor;
  blogCards[i].onmouseout = restoreCardColor;
}
