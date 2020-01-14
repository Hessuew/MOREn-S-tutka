import axios from "axios";
import { throttleAdapterEnhancer } from "axios-extensions";

const throttleConfig = {
    threshold: 120*1000 
}

const httpClient = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json",
    },
    adapter: throttleAdapterEnhancer(axios.defaults.adapter, throttleConfig)
});

const errorInterceptor = error => {
    switch (error.response.status) {
        case 400:
            window.console.error(error.response.status, error.message);
            this.$store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            //this.$notify({ group: "error-notification", title: "Nothing to display", text: "Data Not Found" });
            break;
        case 408:
            window.console.error(error.response.status, error.message);
            this.$store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            //this.$notify({ group: "error-notification", title: "Request Timeout", text: "The server timed out waiting for the request" });
            break;
        case 429:
            window.console.error(error.response.status, error.message);
            this.$store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

            //notify.noti("Too Many Requests", "User has sent too many requests in a given amount of time");
            break;
        default:
            window.console.error(error.response.status, error.message);
            this.$store.dispatch("snackbar/setSnackbar", {
                showing: true,
                text: error.message,
                timeout: 10000,
                color: "error"
            });

        //this.$notify({ group: "error-notification", title: "Server error", text: "" });

    }
    return Promise.reject(error);
}
const responseInterceptor = response => {
    switch (response.status) {
        case 200:
            break;
        default:
    }

    return response;
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;