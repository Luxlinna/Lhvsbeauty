Website hosting on Netlify:

**https://lhvsbeauty.netlify.app**

# Getting Started with Create React App
Github repository: https://github.com/Luxlinna/lhvsbeauty.git

1. npm install
2. npm start
3. npm run build

Guide to push to gitHub repositories:
1. git init
2. git add .
3. git commit -m "Initial commit"
4. git remote add origin https://github.com/your-username/your-repository.git
5. git push -u origin master


## Important information and requirement for this project:
lhvsBeauty : School Project

1. npx create-react-app my-app
2. cd my-app
3. npm install tailwindcss@latest postcss@latest autoprefixer@latest
4. npx tailwindcss init
5. // tailwind.config.js
    1. module.exports = {
    2.   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    3.   darkMode: false, // or 'media' or 'class'
    4.   theme: {
    5.     extend: {},
    6.   },
    7.   variants: {
    8.     extend: {},
    9.   },
    10.   plugins: [],
    11. }
6.  touch src/tailwind.css     // add code below in the file
    * @tailwind base;
    * @tailwind components;
    * @tailwind utilities;
7. npm install -D prettier prettier-plugin-tailwindcss     // https://www.youtube.com/watch?v=DenUCuq4G04
    1. https://www.youtube.com/watch?v=dFgzHOX84xQ
    2. https://tailwindcomponents.com/cheatsheet/
    3. https://tailwindcomponents.com/cheatsheet/  
8. npm install @mui/icons-material
9. npm install @emotion/react @emotion/styled
10.  npm install react-slick --save     //  https://react-slick.neostack.com/docs/get-started
11. npm install tailwindcss @material-ui/core @material-ui/icons    // https://mui.com/material-ui/material-icons/
12. downgrade react to let it support materialUI icons
    1. npm list react   // Check version
    2. npm uninstall react   // remove react
    3. npm install @mui/material @emotion/react @emotion/styled
    4. npm install axios    // https://www.npmjs.com/package/axios?activeTab=readme#axios-api





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
