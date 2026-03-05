import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faJava, faJs, faLinkedin, faPython } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faEnvelope, faLinkedin, faPython, faJs, faJava);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Register component
app.use(router)
app.mount('#app');