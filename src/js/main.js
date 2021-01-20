import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filters from "./modules/filtres";
import setImageHover2 from "./modules/setImageHover2";
import accordion from "./modules/accordion";
import accordion2 from "./modules/accordion2";
import accordion3 from "./modules/accordion3";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    forms();

    sliders('.feedback-slider-item',
        'horizontal',
        '.main-prev-btn',
        '.main-next-btn');

    sliders('.main-slider-item',
        'vertical');

    mask('[name="phone"]');

    showMoreStyles('.button-styles', '#styles .row')

    calc('#size',
        '#material',
        '#options',
        '.promocode',
        '.calc-price');

    modals();

    filters('.portfolio-menu',
        '.portfolio-block',
        '.portfolio-no');

    burger('.burger-menu', '.burger')
    setImageHover2('.sizes-block');
    /*    accordion('.accordion-heading')*/
    /*        accordion2('.accordion-heading','.accordion-block');*/
    accordion3('.accordion-heading');
    scrolling('.pageup');
    drop();
})