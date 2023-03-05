# Tri Vu's Marvel App

## Table of Contents

* [Title](https://github.com/trimvu/Marvel#tri-vus-marvel-app)
* [Live Demo](https://github.com/trimvu/Marvel#live-demo)
* [About](https://github.com/trimvu/Marvel#about)
* [Technology Stack](https://github.com/trimvu/Marvel#technology-stack)
* [MVP (Minimum Viable Product)](https://github.com/trimvu/Marvel#mvp-minimum-viable-product)
* [Stretch Goals](https://github.com/trimvu/Marvel#stretch-goals)
* [Potential Future Goals](https://github.com/trimvu/Marvel#potential-future-goals)
* [Developer](https://github.com/trimvu/Marvel#developer)

## Live Demo

[https://marvel-trimvu.vercel.app/](https://marvel-trimvu.vercel.app/)

## About

This Marvel application allows users to search up Marvel characters, comics, creators, events, and series using Marvel Comics' API. Upon opening up the website, users have access to the home page, where they have access to the 'Home' and 'Favorites' buttons at the top navigation bar, and a form. The form has three parts to it: the select option dropdown, the search input, and the 'Search' button. 

After the user select which category to view, the user is taken to the results page for that respective category. Here, users can browse up to ten elements of the respective category and view more results with the 'Previous' and 'Next' buttons if possible. Between the 'Previous' and 'Next' button shows how many pages are available to paginate through.

Once a character, comic, creator, event, or series is chosen, the user is taken to the character, comic, creator, event, or series page, which gives more information. The title of what was selected along with its image is displayed. Above the title is a 'Favorite' button that allows users to add to 'Favorites' page. The 'Favorite' button switches to 'Unfavorite' button (a button that removes from the favorites) when pressed. If a description or additional information is available, it would be displayed under the name/title. Underneath the main portion of the page are the related section of the page. I.e., if the user is viewing a character page, underneath the character's image will be comic(s), event(s), and series that character is associated with. Users can click on the comic, event, or series and the users will be redirected to that respective comic, event, or series. The related section can also be paginated with the 'Previous' and 'Next' buttons with an indicator of how many are available.

When the user clicks and views the 'Favorites' button and page, the user can view everything that the user selected as favorite. The favorite items can be deleted with the 'Delete' button on every card. If a card is deleted, a 'Undo Delete' button is enabled and becomes disabled when clicked. As of now, users can only click the 'View' button if the card is a character and the page will not render correctly if it is clicked for the comics, creators, events, or series category.

## Technology Stack

* React
* Redux
* JavaScript
* HTML5
* CSS3
* SCSS
* Bootstrap
* Marvel Comics' API

## MVP (Minimum Viable Product)

* A functional form where users can choose to search for 'Characters', 'Comics', 'Creators', 'Events', and 'Series'
* Dislay characters, comics, creators, events, and series using Marvel Comics' API
* Use Redux to manage the state of user's favorite characters, comics, creators, events, and series in the 'Favorites' page
* Use Redux to help with state management of pagination of all of the five categories results pages and the categories' individual related sections
* Show related content underneath every character, comic, creator, event, and series and have the ability to click on the content to view more
* A logical paginator so that if a user clicks on 'Previous' button on '0 of 0' or '1 of x', the indicator wouldn't go to '-1 of 0' or '0 of x'
* A logical paginator so that once the indicator reaches the end, 'x of x', the indicator restarts to '1 of x'
* A moderately appealing user interface

## Completed Stretch Goals

* Creating a reusuable component to reuse for other components
* Ability to click a character's, comic's, creator's, event's, or series' card image to redirect to respective page
* An indicator at the bottom of every results page that indicates how many results are available
* Having the indicator show '0 of 0' if the results page does not return any result
* Implementing SCSS
* Having the default category searched be 'Characters' if the user did not select a category
* Resetting the state on every search

## Potential Future Goals

* Touch up on the styling to make it a better visual experience (especially to help with mobile viewing)
* The ability to click on the 'View' button of a card in the 'Favorites' page to link the user to the correct page. As of now, the 'View' button only works for the characters

## Developer

Tri -  [LinkedIn](https://www.linkedin.com/in/tri-minh-vu/) - [GitHub](https://github.com/trimvu) - [Portfolio](https://tri-vu-dev.netlify.app/)