# Landing Page Project

## Introduction

This site is my submission for Udacity's 'Front End Web Developer' nanodegree 'Landing Page' project.

I have taken the content from the individual pages of the previous 'Personal Blog' project and used them to create
'blog-card' that are scanned, indexed and have a navigation section built for them by Javascript. There is a
separate Javascript file that instantiates a set of behaviours for various elements on the page.


## Description

The site comprises, primarily a single page (see NOTE); the landing page. This is a long scrollable page containing:
 * a banner heading
 * a navigation section, built dynamically when the page loads, providing links to each day's blog entry
 * a short introduction
 * the collection of 'blog-cards'
 * some footer elements

 NOTE: there are two extra pages:
  * one providing a destination for the dummy social media links in the footer
  * one providing a dummy 'subscribe' form to the blog

## Features

 1. Clicking on any of the dated navigation links scrolls the page to the appropriate 'blog card' which is:
 	* centred in the window if it is shorter than the window height
 	* scrolled to the top of the window if it is taller than the window height
 2. Once the scrolling is complete, all blog cards are dimmed except the selected card which is highlighted.
 3. If manually scrolled the blog card closest to the window centre is highlighted, others are dimmed
 4. Double clicking on a dimmed blog card scrolls it to the centre (or top) of the window and highlights it:
  * Double clicking does not work on mobile devices
 5. The navigation secton of the page 'sticks' to the top of the window for the first part of a page scroll
 6. After a significant page scroll, a 'back to top' button apears in the lower right cormer of the window:
  * This has a 'tooltip' that appears on 'hover' to explain its function.
 7. The page features 'responsve' adjustments for changes in window size:
  * The Javascript generated links in the navigation section 'flow' in row wrap mode as the window narrows.
  * The size of headings and text on the blog card changes to prevent overflow.
 8. The page features responsive adjustments for mobile devices
  * The most significant of these is a change in the 'grid' for the blog cards when viewing on narrow:
     mobile devices.


