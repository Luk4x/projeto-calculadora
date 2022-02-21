// themes
let allLi = document.querySelectorAll('li')

allLi.forEach((li, i) => {
    li.addEventListener('click', e => {
        let indicator = document.querySelector('.indicator')
        indicator.style.transform = `translateX(calc(${i * 43}px))`
        console.log(i)
        if(i === 0) {
            document.documentElement.style.setProperty('--col2', '#3b38f3')
        } else if(i === 1) {
            document.documentElement.style.setProperty('--col2', '#8d0808')
        }
    })
})

// keybord feedback animation
let equalKey = document.getElementById('equal-key')
let bsKey = document.getElementById('backspace-key')
let moreMinusKey = document.getElementById('moreMinus-key')
let percentKey = document.getElementById('percent-key')
let divisionKey = document.getElementById('division-key')
let sevenKey = document.getElementById('seven-key')
let eightKey = document.getElementById('eight-key')
let nineKey = document.getElementById('nine-key')
let multiplicationKey = document.getElementById('mutiplication-key')
let fourKey = document.getElementById('four-key')
let fiveKey = document.getElementById('five-key')
let sixKey = document.getElementById('six-key')
let minosKey = document.getElementById('minos-key')
let oneKey = document.getElementById('one-key')
let twoKey = document.getElementById('two-key')
let threeKey = document.getElementById('three-key')
let plusKey = document.getElementById('plus-key')
let zeroKey = document.getElementById('zero-key')
let pointKey = document.getElementById('point-key')

document.addEventListener('keyup', animationUp)
document.addEventListener('keydown', animationDown)

function animationUp(keyp) {
    switch (keyp.key) {
        case '=':
            equalKey.classList.toggle('active')
        break

        case 'Enter':
            equalKey.classList.toggle('active')
        break

        case 'Backspace':
            bsKey.classList.toggle('active')
        break

        case '?':
            moreMinusKey.classList.toggle('active')
        break
        
        case '%':
            percentKey.classList.toggle('active')
        break

        case '/':
            divisionKey.classList.toggle('active')
        break

        case '7':
            sevenKey.classList.toggle('active')
        break
        
        case '8':
            eightKey.classList.toggle('active')
        break

        case '9':
            nineKey.classList.toggle('active')
        break

        case '*':
            multiplicationKey.classList.toggle('active')
        break

        case '4':
            fourKey.classList.toggle('active')
        break

        case '5':
            fiveKey.classList.toggle('active')
        break

        case '6':
            sixKey.classList.toggle('active')
        break

        case '-':
            minosKey.classList.toggle('active')
        break

        case '1':
            oneKey.classList.toggle('active')
        break

        case '2':
            twoKey.classList.toggle('active')
        break

        case '3':
            threeKey.classList.toggle('active')
        break

        case '+':
            plusKey.classList.toggle('active')
        break

        case '0':
            zeroKey.classList.toggle('active')
        break

        case ',':
            pointKey.classList.toggle('active')
        break

        case '.':
            pointKey.classList.toggle('active')
        break

        default:
        break
    }
}

function animationDown(keyp) {
    switch (keyp.key) {
        case '=':
            equalKey.classList.toggle('active')
        break

        case 'Enter':
            equalKey.classList.toggle('active')
        break

        case 'Backspace':
            bsKey.classList.toggle('active')
        break

        case '?':
            moreMinusKey.classList.toggle('active')
        break

        case '%':
            percentKey.classList.toggle('active')
        break

        case '/':
            divisionKey.classList.toggle('active')
        break
        
        case '7':
            sevenKey.classList.toggle('active')
        break

        case '8':
            eightKey.classList.toggle('active')
        break
        
        case '9':
            nineKey.classList.toggle('active')
        break
        
        case '*':
            multiplicationKey.classList.toggle('active')
        break
        
        case '4':
            fourKey.classList.toggle('active')
        break
        
        case '5':
            fiveKey.classList.toggle('active')
        break
        
        case '6':
            sixKey.classList.toggle('active')
        break
        
        case '-':
            minosKey.classList.toggle('active')
        break
        
        case '1':
            oneKey.classList.toggle('active')
        break
        
        case '2':
            twoKey.classList.toggle('active')
        break
        
        case '3':
            threeKey.classList.toggle('active')
        break
        
        case '+':
            plusKey.classList.toggle('active')
        break
        
        case '0':
            zeroKey.classList.toggle('active')
        break
        
        case ',':
            pointKey.classList.toggle('active')
        break

        case '.':
            pointKey.classList.toggle('active')
        break

        default:
        break
    }
}

// key mapping
document.addEventListener('keypress', keyboardLis)
document.addEventListener('keydown', backspaceLis)

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

// getting and treating values
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