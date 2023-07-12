export default class CreatImage {
  createImg() {
    const images = document.querySelector('.images');

    const div = document.createElement('div');
    div.classList.add('img-box');
    images.appendChild(div);
    const btn = document.createElement('button');
    btn.classList.add('btn-img');
    btn.textContent = 'X';
    div.appendChild(btn);
    return div;
  }
}
