# recettes-webservice
RESTful Web Service for [Recettes Android App](https://github.com/hieumt2198/Recettes)

## Installation
* Download or clone this repository
* Go to downloaded folder
* Run command `npm install`
* Run command `node index.js`

## API

### User
* GET `/api/users/:userId`
* POST `/api/users`

### Recipe

* GET `/api/recipes`
* POST `/api/recipes`
* GET `/api/recipes/:id`
* PUT `/api/recipes/:id`
* DELETE `/api/recipes/:id`
* POST `/api/search/recipes`

### Ingredient

* GET `/api/ingredients`
* POST `/api/ingredients`
* GET `/api/ingredients/:id`
* PUT `/api/ingredients/:id`
* DELETE `/api/ingredients/:id`
* GET `/api/search/ingredients/:recipe_id`

### Tag

* GET `/api/tags`
* POST `/api/tags`
* GET `/api/tags/:id`
* PUT `/api/tags/:id`
* DELETE `/api/tags/:id`
* GET `/api/search/tags/:recipe_id`

### Comment

* GET `/api/comments`
* POST `/api/comments`
* GET `/api/comments/:id`
* PUT `/api/comments/:id`
* DELETE `/api/comments/:id`
* GET `/api/search/comments/:recipe_id`

