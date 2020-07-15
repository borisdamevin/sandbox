module.exports = {
    server: {
        port: 8080
    },

    loading: false,
    target: 'static',

    head: {
        titleTemplate: '%s - Sandbox',

        meta: [
            {
                charset: 'utf-8'
            },

            {
                name: 'viewport',
                content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            },

            {
                name: 'robots',
                content: 'noindex, nofollow'
            },

            {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge'
            }
        ],

        link: [],

        script: [],

        htmlAttrs: {
            class: 'no-js',
            lang: 'en',
            dir: 'ltr'
        }
    },

    css: [
        '~/assets/sass/app.scss'
    ],

    plugins: [],

    modules: [],

    router: {},

    build: {}
};
