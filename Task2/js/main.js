const imgDivEl = document.querySelectorAll('.img-div');
const dateEl = document.querySelector('.date');
const numberOfPicturesEl = document.querySelector('.number-of-pictures');
const fullImgEl = document.querySelector('.full-img');
const backgroundImgEl = document.querySelector('.background-img');

let count = 0;
imgDivEl.forEach(el => {

  count += 1;
  numberOfPicturesEl.innerHTML = `Количество картинок: ${count}`;

  el.addEventListener('click', event => {
    fullImgEl.innerHTML = `<img src="${el.childNodes[0].attributes[0].value}"> <div class="close"></div>`;
    fullImgEl.style.display = 'block';
    backgroundImgEl.style.display = 'block';

    const closeEl = document.querySelector('.close');

    closeEl.addEventListener('click', event => {
      fullImgEl.style.display = 'none';
      backgroundImgEl.style.display = 'none';
    });
  });
});

dateEl.innerHTML = `Дата: ${moment().format('DD:MM:YYYY')}`;