import {request} from "../services/requests";


const forms = (modalState = null) => {
    const form = document.querySelectorAll('form'),
        upload = document.querySelectorAll('[name="upload"]');

    function clearInputs() {
        let fields = null;
        let inputs = document.querySelectorAll('input'),
            textarea = document.querySelectorAll('textarea');

        fields = [...inputs, ...textarea];

        fields.forEach(item => {
            item.value = '';
        });

        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });

    }

    upload.forEach(item => {
        let dots = null;
        let arr = null;
        item.addEventListener('input', () => {
            arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            item.previousElementSibling.textContent = arr[0].substring(0, 7) + dots + ' ' + arr[1];
        });
    });

    /*
        checkNumInputs('input[name="user_phone"]');
    */

    const message = {
        loading: 'Загрузка...',
        success: 'Успешно,мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    }


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            let result = {};
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api = null;
            item.closest('.popup-design') ||
            item.classList.contains('calc-form') ? api = path.designer : api = path.question;
            console.log(api);

            formData.forEach((value, key) => {
                result[key] = value;
            });

            Object.assign(result, modalState)
            result = JSON.stringify(result)
            console.log(result)

            request(api, result,'POST')
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};
export default forms;