function bulmaOnInit() {
  const burgers = document.querySelectorAll('.burger');

  burgers.forEach((element) => {
    element.addEventListener('click', () => {
      const target = document.querySelector(`#${element.dataset.target}`);

      element.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  });
}
