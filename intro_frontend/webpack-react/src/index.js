// import { sayHi } from "./utils.js";

// sayHi()

import { createRoot } from 'react-dom/client';
import App from "./app";
import './styles.css'

document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById('root'))
root.render(<App/>)