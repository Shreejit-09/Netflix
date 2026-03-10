# Netflix 
- Create React app using Vite
    npm create vite@latest my-react-app -- --template react
    cd to project folder and run npm install
    to start project npm run dev

- Configure Tailwind
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p

    in "tailwind.config.js" add
    export default {
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
        ],
        theme: {
        extend: {},
        },
        plugins: [],
        };

- Open your main CSS file and add tailwind directives
        /* ./src/index.css */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

- Header
- Login form
- Validating the inputs
- useRef hook
- Deploying project
    - npm install -g firebase-tools
    - firebase login
    - firebase init hosting
    - npm run build
    - firebase deploy --only hosting
- Create Signup and Signin functionality to actually add and validate the user
- Created Redux Store 
- Implemented Sign out
- update Profile
- BugFix: Sign up user displayName
- BugFix:  Redirect
            - if user not logged in to "/"
            - if user logged in to "/browse
- Unsubscribe to onAuthStateChange, so that when component unmounts, we also unsubscribe to it.
- add hardcoded data to contants file
- Register to TMDB and add an app
- Get Dta from TMDB "now playing" list API
-
