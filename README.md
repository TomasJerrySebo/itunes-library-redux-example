## ADD DOCS

BRIEF DESCRIPTION:

- The project was created and built with create-react-app
- I choose to apply external state management using Redux
- For the middleware I used redux-saga since I read the docs, and I found that you can write a lot cleaner code with it. 
- All the data is being stored in the redux store, the likedAlbums are persistent through each screen, and the rest is always overwritten with the lastest api fetch
- For the API error handling I created a Action "API_ERROR" which I'm firing from the saga if any axios error is thrown
- During the coding I found out that the itunes api endpoints return a CORS error on some Artist, Album Listings or Album Details so I implements a JsonP Adapter on the Axios calls using the "axios-jsonp" packg.
- Each components is setting it's page title into the redux store upon componetnt mount
- Each component triggers also diffrent action creators for setting, fetching the Albums, Artist
- The Async flow is handled by the redux-saga which is yielding and calling the api promises and waiting for the response, and based on it firing the success or error Actions handled by the reducer
- The reducer is pretty much only updating the store based based on the dispatched action
- The components are then in the end taking in the store data, mapping it to the props and rendering the output based on it

LIST OF 3RD PARTY PACKAGES:

- "axios": Used for the async api calls
- "axios-jsonp": Used for the async calls which return a CORS error
- "moment": Used for formating the date in the output
- "react-bootstrap": Used for the applied styling of the App
- "react-redux","redux": Used for the external state management
- "react-router-dom": Used for page/component routing/linking
- "redux-saga": Used for the middleware async flow

BUILD PROCESS:
Explained below in the CRETE REAC APP DOCS but briefly:

1. cloning the app from the provided git repo
2. Running yarn install
3. Running yarn start for it to run in http://localhost:3000/
   OR
4. Running yarn build for creating a production build
5. Creating a div with the Id of "app"
6. Embeding the static .js,.css chunk files,img files in your app

## CREATE REACT APP DOCS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
