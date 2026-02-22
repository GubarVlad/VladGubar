const logo = document.querySelector('.mainlogo');
const faceImg = document.querySelector('.image-wrapper-face img');

// Получаем верх логотипа относительно документа
function getLogoBottom() {
  const rect = logo.getBoundingClientRect();
  return rect.bottom + window.scrollY; // bottom логотипа относительно документа
}

// Проверка пересечения логотипа с картинкой
function updateLogo() {
  const rectImg = faceImg.getBoundingClientRect();
  const imgTop = rectImg.top + window.scrollY;
  const imgBottom = rectImg.bottom + window.scrollY;
  const logoBottom = getLogoBottom();

  // Меняем логотип только если его низ пересек верх картинки
  if (logoBottom >= imgTop && logoBottom <= imgBottom) {
    logo.src = 'img/VLADGUBAR-DARK.svg';
  } else {
    logo.src = 'img/VLADGUBAR.svg';
  }
}

// Проверка при загрузке
updateLogo();

// При скролле и ресайзе
window.addEventListener('scroll', updateLogo);
window.addEventListener('resize', updateLogo);

