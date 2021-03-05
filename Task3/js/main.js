const countEl = document.querySelector('.count');
const inputEl = document.querySelector('.input-text');
const sendBtnEl = document.querySelector('.send');
const resetBtnEl = document.querySelector('.reset');
const resultEl = document.querySelector('.result');


sendBtnEl.addEventListener('click', async (e) => {
  e.preventDefault();
  const universitiesArr = await axios.get(`http://universities.hipolabs.com/search?country=${inputEl.value}`).then(r => r.data);
  let str = '';
  universitiesArr.forEach((el, index) => {
    str = `${str}
            <tr><td>${index}</td><td>${el.country}</td><td>${el.alpha_two_code}</td><td>${el.name}</td><td><a href="${el.web_pages}" target="_blank">${el.web_pages}</a></td><td>${el.domains}</td><td><input type="checkbox" class ="check"></td></tr>
            `
  });

  resultEl.innerHTML = `<table border="1">
                          <tr>
                            <th>№</th>
                            <th>Country</th>
                            <th>Alpha code</th>
                            <th>Name</th>
                            <th>Web Pages</th>
                            <th>Domains</th>
                            <th>Сохранить в мой список</th>
                          </tr>
                          ${str}
                        </table>`;

  const chbox = document.querySelectorAll('.check');

  let count = 0;
  chbox.forEach(el => {
    el.addEventListener('click', ev => {
      if (el.checked) {
        count += 1;
        countEl.innerHTML = `Количество выбранных: ${count}`;
      }
      else {
        count -= 1;
        countEl.innerHTML = `Количество выбранных: ${count}`;
      };
    });
  });
});







