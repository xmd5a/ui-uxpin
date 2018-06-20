class Select {
  constructor(elements) {
    this.elements = elements;
  }

  init() {
    this.bindElements();
  }

  bindElements() {
    this.elements.forEach(el => {
      el.addEventListener('click', this.toggleShowOptions);

      el.querySelectorAll('li').forEach(elOption => {
        elOption.addEventListener(
          'click',
          this.setOptionValue.bind(el, elOption),
        );
      });
    });
  }

  toggleShowOptions() {
    const options = this.querySelector('ul');
    options.classList.toggle('active');
  }

  setOptionValue(elOption) {
    const availableLines = ['line', 'line-wide-dashed', 'line-dashed'];
    if (elOption.hasAttribute('data-value')) {
      this.querySelector('input').value = elOption.getAttribute('data-value');
      this.querySelector('div.c-input').innerHTML = elOption.innerHTML;
    } else if (elOption.hasAttribute('data-class')) {
      this.querySelector('input').value = elOption.getAttribute('data-class');
      availableLines.forEach(line => {
        this.querySelector('div.c-input').classList.remove(line);
      });
      this.querySelector('div.c-input').classList.add(
        elOption.getAttribute('data-class'),
      );
    }
  }
}

export default Select;
