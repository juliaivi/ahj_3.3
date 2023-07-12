import CreatImage from './CreatImages';

export default class Image {
  constructor() {
    this.container = document.querySelector('.container');
    this.form = this.container.querySelector('.form');
    this.images = this.container.querySelector('.images');

    this.labelUrl = this.container.querySelector('.label-url');
    this.input = this.labelUrl.querySelector('.form-input');
  }

  init() {
    this.form.addEventListener('submit', (event) => this.onSubmit(event));
    this.images.addEventListener('click', (event) => this.removeImg(event));
    this.input.addEventListener('input', (event) => this.onInput(event));
  }

  onSubmit(e) {
    e.preventDefault();
    this.creatImage = new CreatImage();
    const img = document.createElement('img');
    img.src = this.form.url.value;
    img.alt = this.form.imgname.value;

    img.onload = () => {
      this.creatElem = this.creatImage.createImg();
      this.creatElem.append(img);
      this.form.reset();
      this.removeMistake();
    };

    img.onerror = () => {
      this.addMistake(this.labelUrl, 'Неверный URL изображения');
    };
  }

  onInput(e) {
    if (e.target.value === '') {
      this.removeMistake();
    }
  }

  addMistake(el, mistake) {
    const mistakeImg = `
              <div class="mistake">${mistake}</div>
             `;
    el.insertAdjacentHTML('beforeend', mistakeImg);
  }

  removeImg(e) {
    if (e.target.classList.contains('btn-img')) {
      e.target.closest('.img-box').remove();
    }
  }

  removeMistake() {
    const mistake = this.container.querySelector('.mistake');
    if (mistake) {
      mistake.remove();
    }
  }
}
