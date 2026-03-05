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

