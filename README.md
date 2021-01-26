# FunkyShop

## Core technologies

-   create-react-app
-   axios
-   react-query
-   react-jss

## Quick start

-   `$ npm install`
-   `$ npm start`

## Running unit tests

-   `$ npm run test`

## Runinng Cypress tests

-   Start the application using `$ npm run start` and ensure it is running on port `3000`
-   With the application running, open another terminal and run the command `$ npm run cypress`

## Comments

Images weren't loading from the API, so I just used an image placeholder for products instead.

Given I had more time to work on this project, I would...

-   Increase unit test coverage
-   Make Cypress tests dynamic to support different api responses. At the moment, there are some hard-coded rules (e.g. the first product in the list has a name of "Refined Plastic Chair")
-   Handle error response from api request
-   Handle api request loading state e.g. show skeleton placeholders or a spinner whilst the user is waiting for the request to resolve
-   Persist the list of liked products in local storage, so they are not lost when a user refreshes the page
-   Close the liked product modal when a user clicks on the page (instead of clicking the toggle button again in order to close the modal)
-   Update the result count ("20 Results") when sold items are hidden, as the total number of visible items is no longer 20... but perhaps this is a feature, not a bug?
-   Make IE11 compatible. For example, some of the styling used is not supported by IE11 - notably `grid-template-columns` and `object-fit`
-   Handle edge cases on response data e.g. extremely long product names should be truncated
