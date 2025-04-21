// plugins/fontawesome.js

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import all needed icons (or specific ones)
import { faUser, faHome, faCamera } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faUser, faHome, faCamera);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
