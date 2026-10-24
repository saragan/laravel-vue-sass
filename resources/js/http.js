import axios from 'axios'

const instance = axios.create({
    baseURL: '/',
    timeout: 30000,
    params: {}
});

// as we have created our own instance we need to reset the tokens required
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    instance.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

export default instance