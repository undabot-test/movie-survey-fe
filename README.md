## Movie Survey
[![Netlify Status](https://api.netlify.com/api/v1/badges/f9f98b6a-7d2a-422b-8422-a1d53321e37f/deploy-status?branch=master)](https://app.netlify.com/sites/movie-survey/deploys)

Deploy preview is available here: https://movie-survey.netlify.app/

## Project Structure

The project structure is an adaptation of the [angular structure](https://angular.io/guide/file-structure) and [atomic design ideas](https://atomicdesign.bradfrost.com/chapter-2/) to the realities of react.\
To put it simple, all view components are in the /components folder. Data & logic layer, API requests can be found in the /services folder.\
Сomponents can be divided into several groups, the main ones are: /atoms, /molecules, /organisms, /templates, /pages.\
\
At the moment, network requests are simulated by the service worker.

## Local Environment

These variables are recommended for local development:

```
PORT=3000
SURVEY_API=http://localhost:4000/api/v1/
```

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs project dependencies.

### `yarn watch`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://[::1]:3000/) to access application.

### `yarn build`

Builds the app for production to the `dist` folder.

### `serve dist`

Helps you serve a static site from a dist folder. Use `npm install --global serve` and `yarn build` in advance.
