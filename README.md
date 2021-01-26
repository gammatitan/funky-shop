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

## Runinng Cypress test

-   Start the application using `$ npm run start` and ensure it is running on port `3000`
-   `$ npm run cypress`

## Comments

Images weren't loading from the API, so I just used an image placeholder for products instead.

Given I had more time to work on this project, I would...

-   Increase unit test coverage
-   Make Cypress tests dynamic to support different api responses. At the moment, there are some hard-coded rules (e.g. the first product in the list has a name of "Refined Plastic Chair")
-   Handle api response error
-   Handle api request loading state. It would be better UX to show skeleton placeholders or a spinner whilst the user is waiting for the request to resolve
-   Persist the list of liked products in local storage, so they are not lost when users refresh the page
-   When the modal is open, close it when the user clicks anywhere else on the page (instead of having to directly click again on the header button)
-   Update the result count ("20 Results") when we are hiding sold items, as the total number of visible items is no longer 20... but perhaps this is a feature, not a bug?
