

var section = document.querySelector('section')

var request = new XMLHttpRequest()
request.open('GET', 'data/products.json')
request.responseType = 'text'
request.send()

request.onload = function () {
    var carsText = request.response
    var cars = JSON.parse(carsText)
    populateHeader(cars)
    showModels(cars)
    showMotors(cars)
    showTransmission(cars)
    showDrive(cars)
    showColor(cars)
    showInterior(cars)
    showAudio(cars)
    showCondition(cars)
    showWindow(cars)
    document.getElementById('model').addEventListener('change', function () {
        var choosedCar = document.getElementById('model').value
        document.getElementById('choosedCar').innerHTML = choosedCar
        switch (choosedCar) {
            case "BMW":
                document.getElementById('carImage').src = 'img/bmw.jpg'
                break
            case "AUDI":
                document.getElementById('carImage').src = 'img/audi.jpg'
                break
            case "DODGE":
                document.getElementById('carImage').src = 'img/dodge.jpg'
                break
        }
    })
    document.getElementById('motor').addEventListener('change', function () {
        var choosedMotor = document.getElementById('motor').value
        document.getElementById('choosedMotor').innerHTML = choosedMotor
    })
    document.getElementById('transmission').addEventListener('change', function () {
        var choosedTransmission = document.getElementById('transmission').value
        document.getElementById('choosedTransmission').innerHTML = choosedTransmission
    })
    document.getElementById('drive').addEventListener('change', function () {
        var choosedDrive = document.getElementById('drive').value
        document.getElementById('choosedDrive').innerHTML = choosedDrive
    })
    document.getElementById('color').addEventListener('change', function () {
        var choosedColor = document.getElementById('color').value
        document.getElementById('choosedColor').innerHTML = choosedColor
    })
    document.getElementById('interior').addEventListener('change', function () {
        var choosedInterior = document.getElementById('interior').value
        document.getElementById('choosedInterior').innerHTML = choosedInterior
    })
    document.getElementById('audio').addEventListener('change', function () {
        var choosedAudio = document.getElementById('audio').value
        document.getElementById('choosedAudio').innerHTML = choosedAudio
    })
    document.getElementById('condition').addEventListener('change', function () {
        var choosedCondition = document.getElementById('condition').value
        document.getElementById('choosedCondition').innerHTML = choosedCondition
    })
    document.getElementById('window').addEventListener('change', function () {
        var choosedWindow = document.getElementById('window').value
        document.getElementById('choosedWindow').innerHTML = choosedWindow
    })
    document.getElementById('accept').addEventListener('click', function () {
        localStorage.setItem('Automobilul', document.getElementById('choosedCar').innerHTML)
        localStorage.setItem('Motorul', document.getElementById('choosedMotor').innerHTML)
        localStorage.setItem('Tip cutie', document.getElementById('choosedTransmission').innerHTML)
        localStorage.setItem('Tip tractiune', document.getElementById('choosedDrive').innerHTML)
        localStorage.setItem('Culoarea', document.getElementById('choosedColor').innerHTML)
        localStorage.setItem('Tip interior', document.getElementById('choosedInterior').innerHTML)
        localStorage.setItem('Sistem audio', document.getElementById('choosedAudio').innerHTML)
        localStorage.setItem('Tip aer', document.getElementById('choosedCondition').innerHTML)
        localStorage.setItem('Tip de deschidere a parbrizelor', document.getElementById('choosedWindow').innerHTML)

    })
}
//----------------------------------

//----------------------------------
function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1')
    myH1.textContent = jsonObj['myH1']
    section.appendChild(myH1)
    section.appendChild(document.createElement('hr'))
}

function showModels(jsonObj) {
    var carsModels = jsonObj['models']
    var chooseCar = document.createElement('h4')
    chooseCar.textContent = jsonObj['chooseCar']
    section.appendChild(chooseCar)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsModels.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsModels[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "model"
    }
    section.appendChild(mySelect)
}

function showMotors(jsonObj) {
    var carsMotors = jsonObj['motors']
    var chooseMotor = document.createElement('h4')
    chooseMotor.textContent = jsonObj['chooseMotor']
    section.appendChild(chooseMotor)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsMotors.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsMotors[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "motor"
    }
    section.appendChild(mySelect)
}

function showTransmission(jsonObj) {
    var carsTransmission = jsonObj['transmission']
    var chooseTransmission = document.createElement('h4')
    chooseTransmission.textContent = jsonObj['chooseTransmission']
    section.appendChild(chooseTransmission)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsTransmission.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsTransmission[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "transmission"
    }
    section.appendChild(mySelect)
}

function showDrive(jsonObj) {
    var carsDrive = jsonObj['driveType']
    var chooseDrive = document.createElement('h4')
    chooseDrive.textContent = jsonObj['chooseDrive']
    section.appendChild(chooseDrive)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsDrive.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsDrive[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "drive"
    }
    section.appendChild(mySelect)
}

function showColor(jsonObj) {
    var carsColor = jsonObj['color']
    var chooseColor = document.createElement('h4')
    chooseColor.textContent = jsonObj['chooseColor']
    section.appendChild(chooseColor)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsColor.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsColor[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "color"
    }
    section.appendChild(mySelect)
}

function showInterior(jsonObj) {
    var carsInterior = jsonObj['interior']
    var chooseInterior = document.createElement('h4')
    chooseInterior.textContent = jsonObj['chooseInterior']
    section.appendChild(chooseInterior)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsInterior.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsInterior[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "interior"
    }
    section.appendChild(mySelect)
}

function showAudio(jsonObj) {
    var carsAudio = jsonObj['audio']
    var chooseAudio = document.createElement('h4')
    chooseAudio.textContent = jsonObj['chooseAudio']
    section.appendChild(chooseAudio)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsAudio.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsAudio[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "audio"
    }
    section.appendChild(mySelect)
}

function showCondition(jsonObj) {
    var carsCondition = jsonObj['airCondition']
    var chooseCondition = document.createElement('h4')
    chooseCondition.textContent = jsonObj['chooseCondition']
    section.appendChild(chooseCondition)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsCondition.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsCondition[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "condition"
    }
    section.appendChild(mySelect)
}

function showWindow(jsonObj) {
    var carsWindow = jsonObj['window']
    var chooseWindow = document.createElement('h4')
    chooseWindow.textContent = jsonObj['chooseWindow']
    section.appendChild(chooseWindow)
    var mySelect = document.createElement('select')
    for (var i = 0; i < carsWindow.length; i++) {
        var myOption = document.createElement('option')
        myOption.textContent = carsWindow[i].name

        mySelect.appendChild(myOption)
        mySelect.classList.add('form-control')
        mySelect.id = "window"
    }
    section.appendChild(mySelect)
}
