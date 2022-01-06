document.addEventListener('keypress', keyboardLis)
document.addEventListener('keydown', backspaceLis) // fresco 

function keyboardLis(keyp) {
    if ((keyp.key>=0 && keyp.key<=9) || keyp.key=='*' || keyp.key=='/' || keyp.key=='-' || keyp.key=='+' || keyp.key==',' || keyp.key=='.') {
        if (keyp.key==',') {
            insertValues('.')
        } else {
            insertValues(keyp.key)
        }
    } else if (keyp.key=='%') {
        percentCalc()
    } else if (keyp.key=='Enter' || keyp.key=='=') {
        calculate()
    } else if (keyp.key=='Delete') {
        displayClear()
    } else if (keyp.key=='?') {
        invertSign()
    }
}

function backspaceLis(keyp) {
    if (keyp.keyCode=='8') {
        displayClear()
    }
}

function insertValues(value) {
    document.getElementById('displayCalc').value += value
}

function calculate() {
    if (document.getElementById('displayCalc').value == '') {
        document.getElementById('displayCalc').value = '0'
    } else {
        let resultCalc = eval(document.getElementById('displayCalc').value)
        document.getElementById('displayCalc').value = resultCalc
    }
}

function displayClear() {
    document.getElementById('displayCalc').value = ''
}

function invertSign() {
    if (document.getElementById('displayCalc').value == '') {
        document.getElementById('displayCalc').value = '0'
    } else {

    calculate()

    document.getElementById('displayCalc').value *= -1
    }
}

function percentCalc() {
    if (document.getElementById('displayCalc').value == '') {
        document.getElementById('displayCalc').value = '0'
    } else {
        calculate()

        resultPercentCalc = document.getElementById('displayCalc').value / 100
        document.getElementById('displayCalc').value = resultPercentCalc
    }
}