const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            value = this.value.replace(/\D/g, '');

        if (def.length >= value.length) {
            value = def;
        }
        this.value = matrix.replace(/./g, (sim) => {
            return /[_\d]/.test(sim) ? value.charAt(i++) : i >= value.length ? '' : sim;
        });
        if (event.type === 'blur') {

            console.log(123)
            if (this.value.length === 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }


    let inputs = document.querySelectorAll(selector),
        inputName = document.querySelectorAll('[name="name"]'),
        inputQuestion = document.querySelectorAll('[name="message"]');

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });

    function onlyRussianChar(inputs) {
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[^А-яё0-9]/ig, '');
            });
        });
    }

    onlyRussianChar(inputName);
    onlyRussianChar(inputQuestion);
}
export default mask