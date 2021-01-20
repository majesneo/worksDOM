// const setImageHover = (selector) => {
//     const imageBlock = document.querySelectorAll(selector);
//
//     const images = {
//         'size-1': 'assets/img/sizes-1-1.png',
//         'size-2': 'assets/img/sizes-2-1.png',
//         'size-3': 'assets/img/sizes-3-1.png',
//         'size-4': 'assets/img/sizes-4-1.png'
//     };
//
//     let oldPicture = null;
//
//     function addImage(item, className, event) {
//         for (const imagesKey in images) {
//             if (className === imagesKey) {
//                 if (event === 'mouseenter') {
//                     hideChildNode(item, '1000');
//                     oldPicture = item.getAttribute('src');
//                     item.setAttribute('src', images[imagesKey]);
//                 } else {
//                     hideChildNode(item, 'auto');
//                     item.setAttribute('src', oldPicture);
//                 }
//             }
//         }
//     }
//
//     function hideChildNode(item, index) {
//         item.style.position = 'relative';
//         item.style.zIndex = index;
//     }
//
//     function focusHover(event) {
//         imageBlock.forEach(block => {
//             block.addEventListener(event, () => {
//                 block.children.forEach(item => {
//                     if (item.nodeName === 'IMG') {
//                         addImage(item, item.className, event);
//                     }
//                 });
//             });
//         });
//     }
//
//     focusHover('mouseenter')
//     focusHover('mouseleave')
// }
// export default setImageHover