const TogglePanel = el => {
  const section = el.currentTarget.getAttribute('data-section');
  document
    .querySelector(`div[data-section="${section}"]`)
    .classList.toggle('active');
};

export default TogglePanel;
