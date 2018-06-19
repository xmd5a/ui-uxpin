/*
  Project: frontend-ui-dev-recruitment-task
  Author: Piotr Szarmach
 */

import TogglePanel from './modules/TogglePanel';

document.querySelectorAll('.c-section__headline').forEach(el => {
  el.addEventListener('click', TogglePanel);
});
