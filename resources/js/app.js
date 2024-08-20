import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import axios from 'axios';

const app = createApp(App);

// Use the router instance in the app
app.use(router);

// Mount the app to the DOM
app.mount('#app');