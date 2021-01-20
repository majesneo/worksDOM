const setImageHover2 = (selector) => {
    const blocks = document.querySelectorAll(selector);

    function showImage(block) {
        let blockImage = block.querySelector('img');
        hideChild(blockImage, '1000')
        let newImage = blockImage.src.slice(0, -4) + '-1.png';
        blockImage.setAttribute('src', newImage);
    }

    function hideImage(block) {
        let blockImage = block.querySelector('img');
        hideChild(blockImage, 'auto')
        let newImage = blockImage.src.slice(0, -6) + '.png';
        blockImage.setAttribute('src', newImage);
    }


    function hideChild(blockImage, index) {
        blockImage.style.position = 'relative'
        blockImage.style.zIndex = index;
    }

    blocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            showImage(block);
        });
    })

    blocks.forEach(block => {
        block.addEventListener('mouseleave', () => {
            hideImage(block);
        });
    })
}
export default setImageHover2