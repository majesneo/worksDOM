const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();


        function animatedModal() {
            windows.forEach(item => {
                item.classList.add('animated', 'fadeIn');
            })
        }
        animatedModal()

        function disabledButtonInModal(modal = null) {
            let buttonInForm = null;
            if (modal.querySelector('[data-buttonBlock]')) {
                buttonInForm = modal.querySelector('[data-buttonBlock]');
                buttonInForm.disabled = true;
            }
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';

                })
                modal.style.display = 'block';


                disabledButtonInModal(modal)
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open')
            });
        })


        function closeModals(focusClick, closeSelector) {
            let focus = document.querySelector(focusClick)
            focus.addEventListener('click', (e) => {
                let target = e.target;

                if (!target.classList.contains(closeSelector.replace(/\./, '')) &&
                    target.parentNode.classList.contains(closeSelector.replace(/\./, ''))) {
                    while (!target.classList.contains(closeSelector.replace(/\./, ''))) {
                        target = target.parentNode
                    }
                }

                if ((target && target === focus) ||
                    target.classList.contains(closeSelector.replace(/\./, ''))) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            })
        }

        closeModals(modalSelector, closeSelector)

        function showModalByTime(selector, time) {
            setTimeout(function () {
                let display = false;
                document.querySelectorAll('[data-modal]').forEach(item => {
                    if (getComputedStyle(item).display !== 'none') {
                        display = true;
                    }
                });
                if (!display) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    let scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`;
                }
            }, time)
        }

       /* showModalByTime('.popup-consultation', 6000)*/
    }


    function calcScroll() {
        let div = document.createElement('div')
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed &&
                (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }


    openByScroll('.fixed-gift')

    bindModal('.button-design',
        '.popup-design',
        '.popup-close');

    bindModal('.button-consultation',
        '.popup-consultation',
        '.popup-close');

    bindModal('.fixed-gift',
        '.popup-gift',
        '.popup-close', true);


}
export default modals;