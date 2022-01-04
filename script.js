function insertValues(value) {
    document.getElementById('displayCalc').value += value
}

function calculate() {
    let resultCalc = eval(document.getElementById('displayCalc').value)
    document.getElementById('displayCalc').value = resultCalc
}

function displayClear() {
    document.getElementById('displayCalc').value = ''
}

function invertSign() {
    if (document.getElementById('displayCalc').value == '') {
        document.getElementById('displayCalc').value = '0'
    }

    calculate()

    document.getElementById('displayCalc').value *= -1
}

function percentCalc() {
    if (document.getElementById('displayCalc').value == '') {
        document.getElementById('displayCalc').value = '0'
    }

    calculate()

    resultPercentCalc = document.getElementById('displayCalc').value / 100
    document.getElementById('displayCalc').value = resultPercentCalc
}