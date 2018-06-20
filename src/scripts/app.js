/*
  Project: frontend-ui-dev-recruitment-task
  Author: Piotr Szarmach
 */

import TogglePanel from './modules/TogglePanel';
import Select from './modules/Select';

document.querySelectorAll('.c-section__headline').forEach(el => {
  el.addEventListener('click', TogglePanel);
});

document.querySelectorAll('[data-show]').forEach(el => {
  el.addEventListener('click', section => {
    const showElement = section.currentTarget.getAttribute('data-show');
    const hideElement = section.currentTarget.getAttribute('data-hide');
    document
      .querySelector(`[data-section="${showElement}"]`)
      .classList.toggle('hidden');
    document
      .querySelector(`[data-section="${hideElement}"]`)
      .classList.toggle('hidden');
  });
});

const select = new Select(document.querySelectorAll('.c-select-container'));
select.init();
