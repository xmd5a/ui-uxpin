/*
  Project: frontend-ui-dev-recruitment-task
  Author: Piotr Szarmach
 */

import {togglePanel} from './modules/toggle';

document.querySelectorAll(".c-section__headline").forEach((el) => {
  el.addEventListener("click", togglePanel);
});
