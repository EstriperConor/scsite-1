const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav ul');
if (burger) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
}
// Логика для вкладок (Правила)
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Убираем класс active у всех кнопок и контента
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // 2. Добавляем класс active на нажатую кнопку
      btn.classList.add('active');

      // 3. Показываем нужный контент
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
});
