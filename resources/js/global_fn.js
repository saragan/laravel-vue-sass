import moment from 'moment';
import http from './http.js';

export default {
    install: function (app, options) {

        app.config.globalProperties.$axios = http;
        app.config.globalProperties.FD = false;
        app.config.globalProperties.FDTimer = false;

        app.mixin({
            methods: {
                moment: function (dt, fmt) {

                    if (!fmt) {
                        return moment(dt);
                    }

                    return moment(dt, fmt);
                },
                formatDateTime: function (dt, fmt) {
                    return this.moment(dt, fmt).format("DD/MM/yyyy HH:mm:ss");
                },
                formatDate: function (dt, fmt) {
                    return this.moment(dt, fmt).format("DD/MM/yyyy");
                },
                isNumeric: function (value) {
                    return /^-?\d+$/.test(value);
                },
                getUrlParam: function (key) {
                    const urlParams = new URLSearchParams(window.location.search);
                    return urlParams.get(key);
                },
                __(key, replace) {
                    let translation, translationNotFound = true;

                    try {

                        var split = key.split(".");

                        translation = split.reduce(function (t, i) {
                            return (t[i] || null);
                        }, window._translations[window._locale].php);

                        if (translation) {
                            translationNotFound = false;
                        }

                    } catch (e) {
                        translation = key;
                    }

                    if (translationNotFound) {
                        translation = window._translations[window._locale]['json'][key] ?
                            window._translations[window._locale]['json'][key] :
                            key;
                    }

                    _.forEach(replace, (value, key) => {
                        translation = translation.replace(':' + key, value);
                    });

                    return translation;
                }
            }
        });
    }
};
