import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiperPagination();
  }

  initSwiperPagination() {
    const target = document.querySelector('.swiper');

    if (target) {
      const swiper = new Swiper(target, {
        pagination: { el: '.swiper-pagination', type: 'bullets' },
      });
    }
  }
}
new Main();
