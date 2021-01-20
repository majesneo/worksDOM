const filters = (tabs, content, noPortfolio) => {
    const parent = document.querySelector(tabs),
        portfolioBlocks = document.querySelectorAll(content),
        portfolioNo = document.querySelector(noPortfolio);

    let target = 'all';

    const activeParent = () => {
        parent.children.forEach(item => {
            item.classList.remove('active');
        });
    }

    parent.children.forEach(item => {
        item.addEventListener('click', () => {
            activeParent();
            item.classList.add('active')
            target = item.className;
            showContent(target);
        });
    });

    const setAnimated = () => {
        portfolioBlocks.forEach(item => {
            item.classList.remove('animated', 'bounceInDown');
        });
        return new Promise((resolve, reject) => {
            return setTimeout(resolve, 0);
        });
    }

    function showContent(target) {
        portfolioBlocks.forEach(item => {
            item.style.display = 'none';
            let strSearch = item.className;
            target.split(' ').forEach(str => {
                const reg = new RegExp("\\b" + str + "\\b", 'gm');
                if (reg.test(strSearch)) {
                    setAnimated().then(() => {
                        portfolioNo.style.display = 'none';
                        item.classList.add('animated', 'bounceInDown');
                        item.style.display = 'block';
                    });
                } else {
                    return portfolioNo.style.display = 'block';
                }
            });
        });
    }
}
export default filters