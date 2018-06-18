const togglePanel = el => {
  const section = el.currentTarget.getAttribute('data-section');
  document
    .querySelector(`div[data-section="${section}"]`)
    .classList.toggle('active');
};

export default togglePanel;
