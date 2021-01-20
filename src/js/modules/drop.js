const drop = () => {
    //dragenter - объект над dropArea
    //dragleave- объект за прелами dropArea
    //dragover- объект зависает над  dropArea
    //drop - объект отправлен в dropArea
    const fileInputs = document.querySelectorAll('[name="upload"]');


    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            console.log(input)
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, 0.7)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "#ededed";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                highlight(input)
            }, false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                unhighlight(input)
            }, false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots = null;
            let arr = null;
            arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            input.previousElementSibling.textContent = arr[0].substring(0, 7) + dots + ' ' + arr[1];

        });
    });
}
export default drop