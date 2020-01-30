// весь код, который написан в комментариях(КРОМЕ ТОГО, ЧТО В ФУНКЦИЯХ) - код, который использовался раньше, но был сокращен в функциях( можете на него не смотреть ))00)) 
window.onload = function() { 
    for (let i = 1; i !=7; i++){ // с помощью цикла обхожу все localstorage и выясняю, какой из них был выбран 
        let id = 'input' + i;
        if (localStorage.getItem(id) == 1){
            document.getElementById(id).checked = true;
            document.getElementById(id).value = 1;
        }
    }
    if (localStorage.getItem('disable') == 1){//если результат был сохранен,  с помощью цикла отключить все кнопки
        for (let i = 1; i !=7; i++){
            let id = 'input' + i;
            document.getElementById(id).disabled = true;
    } }
  


    // if (localStorage.getItem('input1') == 1 ){
    //     document.getElementById('input1').checked = true;
    //     document.getElementById('input1').value = 1;
    // }
    // if (localStorage.getItem('input2') == 1 ){
    //     document.getElementById('input2').checked = true;
    //     document.getElementById('input2').value = 1;
    // }
    // if (localStorage.getItem('input3') == 1 ){
    //     document.getElementById('input3').checked = true;
    //     document.getElementById('input3').value = 1;
    // }
    // if (localStorage.getItem('input4') == 1 ){
    //     document.getElementById('input4').checked = true;
    //     document.getElementById('input4').value = 1;
    // }
    // if (localStorage.getItem('input5') == 1 ){
    //     document.getElementById('input5').checked = true;
    //     document.getElementById('input5').value = 1;
    // }
    // if (localStorage.getItem('input6') == 1 ){
    //     document.getElementById('input6').checked = true;
    //     document.getElementById('input6').value = 1;
    // }
}





function Save(id){ // функция, которая создает и удаляет localstorage(при выборе и отмене выбора ячейки) 
    if(document.getElementById(id).value ==0){
        document.getElementById(id).value = 1;
        localStorage.setItem(id, 1);
    }else {
        document.getElementById(id).value = 0;
        localStorage.removeItem(id);
    }
}

function SaveAll() { //функция, которая создает localstorage и блокирует выбор других кнопок(смотри выше в windows.onload)
    localStorage.setItem('disable', 1);
}





// function SaveFirst() {
//     if (document.getElementById('input1').value == 0){
//         document.getElementById('input1').value = 1;
//         localStorage.setItem('input1', 1);
//     }else {
//         document.getElementById('input1').value = 0;
//         localStorage.removeItem('input1');
        
//     }
    
// }
// function SaveSecond() {
//     if (document.getElementById('input2').value == 0){
//         document.getElementById('input2').value = 1;
//         localStorage.setItem('input2', 1);
//     }else {
//         document.getElementById('input2').value = 0;
//         localStorage.removeItem('input2');
//     }

// }
// function SaveThird() {
//     if (document.getElementById('input3').value == 0){
//         document.getElementById('input3').value = 1;
//         localStorage.setItem('input3', 1);
//     }else {
//         document.getElementById('input3').value = 0;
//         localStorage.removeItem('input3');
//     }
// }
// function SaveFourth() {
//     if (document.getElementById('input4').value == 0){
//         document.getElementById('input4').value = 1;
//         localStorage.setItem('input4', 1);
//     }else {
//         document.getElementById('input4').value = 0;
//         localStorage.removeItem('input4');
//     }
// }
// function SaveFifth() {
//     if (document.getElementById('input5').value == 0){
//         document.getElementById('input5').value = 1;
//         localStorage.setItem('input5', 1);
//     }else {
//         document.getElementById('input5').value = 0;
//         localStorage.removeItem('input5');
//     }
// }
// function SaveSixth() {
//     if (document.getElementById('input6').value == 0){
//         document.getElementById('input6').value = 1;
//         localStorage.setItem('input6', 1);
//     }else {
//         document.getElementById('input6').value = 0;
//         localStorage.removeItem('input6');
//     }
// }
