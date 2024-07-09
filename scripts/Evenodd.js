function evenorodd() {
    // get input number
    let number = document.getElementsByName('number')[0].value;
    console.log(number), typeof(number);
    // check using % if number is even or odd
    if (number % 2 === 0) {
        console.log('even');
        isNumber = true
        document.getElementById('resultTxt').innerHTML='<h3>Even</h3>';
    } else if (number % 2 === 1) {
        isNumber = true
        console.log('odd');
        document.getElementById('resultTxt').innerHTML='<h3>Odd</h3>';
    } else {
        console.log('invalid');
        document.getElementById('resultTxt').innerHTML='<h3>Invalid</h3>';
    }
    // ternary operator - short statements only
    if (isNumber) {
        let result = (number % 2 === 0) ? "even" : "odd";
        document.getElementById('resultTxt').innerHTML=`ternary ${result}`;
    }
}

function resetTxt() {
    // remove resultTxt
    document.getElementById('resultTxt').innerHTML='';

}