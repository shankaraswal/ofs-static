# OneFitStop Widgets

This is OneFitStop Widgets app

## Requirements

- Node v12.16.1 installed
- [Yarn Package Manager](https://yarnpkg.com/lang/en/)

## Running on development

- To run the application in development mode use the following command: `yarn start`
- This will display the widget setup inside `public/index.html`

## Running with storybook

- To run the application in development mode use the following command: `yarn storybook`

## Building the production

- In order to build the application for production use the command: `yarn build`. This will create a `build` folder.

### Environments

Since this boilerplate is built on top of [CRA](https://github.com/facebook/create-react-app), all the env variables must have a REACT*APP* prefix. E.g.: REACT_APP_API_URL.

Files to store the environments can be created acording to the NODE_ENV used. For `development`, for e.g., we can create a file with the name `.env.development` and insert all our environment files there. Same goes for production: `.env.production`.
