const res = document.getElementById('res');

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');

const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');

const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMult = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

let result = '';

function clear() {
    result = '';
    res.value = result;
}

btnClr.addEventListener('click', function() {
    clear();
});

function key(c) {
    result += c;
    res.value = result;
}

btn0.addEventListener('click', function() {
    key(this.innerText);
});

btn1.addEventListener('click', function() {
    key(this.innerText);
});

btnSum.addEventListener('click', function() {
    key(this.innerText);
});

btnSub.addEventListener('click', function() {
    key(this.innerText);
});

btnMult.addEventListener('click', function() {
    key(this.innerText);
});

btnDiv.addEventListener('click', function() {
    key(this.innerText);
});

btnEql.addEventListener('click', function() {

    let a = '';
    let b = '';
    let key = '';
    let answer = '';

    if (result.includes('+')) {
        key = '+';
    } else if (result.includes('-')) {
        key = '-';
    } else if (result.includes('*')) {
        key = '*';
    } else if (result.includes('/')) {
        key = '/';
    }

    switch(key) {
        case '+':
            a = parseInt(result.split('+')[0], 2);
            b = parseInt(result.split('+')[1], 2);
            let sum = a + b;
            answer = sum.toString(2);
            break;
        case '-':
            a = parseInt(result.split('-')[0], 2);
            b = parseInt(result.split('-')[1], 2);
            let sub = a - b;
            answer = sub.toString(2);
            break;
        case '*':
            a = parseInt(result.split('*')[0], 2);
            b = parseInt(result.split('*')[1], 2);
            let mult = a * b;
            answer = mult.toString(2);
            break;
        case '/':
            a = parseInt(result.split('/')[0], 2);
            b = parseInt(result.split('/')[1], 2);
            let div = a / b;
            answer = div.toString(2);
            break;
        default:
            throw new Error('Invalid operation');
    }

    result = answer;
    res.value = result;

});
