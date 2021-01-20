function calc(size, material, options, promocode, result) {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;


    function calcSum() {
        if ((!isNaN(sizeBlock.value) && sizeBlock.value !== '')
            && (!isNaN(materialBlock.value) && materialBlock.value !== '')) {
            sum = +sizeBlock.value + +materialBlock.value + +optionsBlock.value;
            resultBlock.textContent = `Сумма покупки: ${sum}`;
            if (promocodeBlock.value === 'IWANTPOPART') {
                sum = Math.round(30 * (sum / 100));
                resultBlock.textContent = `Промокод активирован, сумма покупки: ${sum}`
            }
        } else if (optionsBlock.value !== '' && (sizeBlock.value === '' || sizeBlock.value === '')) {
            resultBlock.textContent = `Выберите размер картины и Выберите материал картины`
        }
    }

    sizeBlock.addEventListener('change', calcSum);
    materialBlock.addEventListener('change', calcSum);
    optionsBlock.addEventListener('change', calcSum);
    promocodeBlock.addEventListener('input', calcSum);
}

export default calc
