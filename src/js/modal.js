document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи
  const menuToggleButton = document.getElementById('menu-toggle');
  const modalWindow = document.querySelector('.modal-window'); // Використовуємо клас для селектора
  const closeModalButton = document.getElementById('close-modal');
  const menuLinks = document.querySelectorAll('.link-modal-window');

  // Функція для відкриття модального вікна
  function openModal() {
    modalWindow.classList.add('show'); // Додаємо клас show для показу
  }

  // Функція для закриття модального вікна
  function closeModal() {
    modalWindow.classList.remove('show'); // Прибираємо клас show для приховування
  }

  // Відкриваємо модальне вікно при натисканні на кнопку меню
  menuToggleButton.addEventListener('click', openModal);

  // Закриваємо модальне вікно при натисканні на кнопку закриття
  closeModalButton.addEventListener('click', closeModal);

  // Закриваємо модальне вікно та прокручуємо до секції при натисканні на посилання в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      closeModal(); // Закриваємо модальне вікно
      const targetId = link.getAttribute('href'); // Отримуємо ID секції
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); // Прокручуємо до секції
      event.preventDefault(); // Блокуємо стандартну поведінку лінка
    });
  });
});
