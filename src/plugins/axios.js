import axios from "axios";

const instance = axios;

instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;