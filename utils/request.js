const axios = require("axios");
require("../utils/color")
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;text/plain;';
axios.defaults.responseType = 'json;text/plain;charset=utf-8;';

function request(url, method, options = {}) {
    return axios[method](url, options)
        .then(
            response => {
                if (!response) {
                    throw Error("response is null");
                }
                console.log(`${url} request success`.info);
                // console.log(options);
                return response;
            },
            error => {
                console.log((`${url} request error`));
                throw error;
            }
        );
}

module.exports = request;