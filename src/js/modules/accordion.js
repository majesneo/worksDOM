const accordion = (selector) => {
    let blocks = document.querySelectorAll(selector);
    let content = [];

    blocks.forEach((block, i) => {
        content.push(block.nextElementSibling);
        block.nextElementSibling.style.display = 'none';
        block.addEventListener('click', () => {
            showContent(i)
        });
    });

    showContent();

    function showContent(iteration) {
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = 'none';
            blocks[i].style.color = '#333';
            if (iteration === i) {
                content[iteration].classList.add('animated', 'fadeInDown')
                content[iteration].style.display = 'block';
                blocks[iteration].style.color = 'purple';
            }
        }
    }

}
export default accordion