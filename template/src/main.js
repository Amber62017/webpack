import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './app.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from 'routes/routes-map'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const router = new VueRouter(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.map(routes){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.start(App, '#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
