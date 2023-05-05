const btn = document.querySelector('.btn-motivation');

const motivation = function () {
  alert('works');
};
btn.addEventListener('click', logJSONData);

async function logJSONData() {
  let randomColor = Math.floor(Math.random() * 16777210).toString(16);
  document.querySelector(
    '.motivation-txt'
  ).style.backgroundColor = `#${randomColor}`;
  document.querySelector(
    '.motivation-author'
  ).style.backgroundColor = `#${randomColor}`;
  document.querySelector('.motivation-txt').style.display = 'block';
  document.querySelector('.motivation-author').style.display = 'block';

  const response = await fetch('https://type.fit/api/quotes');
  const jsonData = await response.json();

  let randomQuote = Math.floor(Math.random() * 1643);
  if (randomQuote <= 1643) {
    document.querySelector(
      '.motivation-txt'
    ).textContent = `"${jsonData[randomQuote].text}"`;
    if (jsonData[randomQuote].author === null) {
      document.querySelector(
        '.motivation-author'
      ).textContent = `Unknown Author`;
    } else {
      document.querySelector(
        '.motivation-author'
      ).textContent = `${jsonData[randomQuote].author}`;
    }
  }
}
