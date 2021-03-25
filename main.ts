input.onPinPressed(TouchPin.P0, function () {
    comptador += 1
    temps_final = input.runningTime()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    comptador = 0
    temps_final = 0
})
let temps_inici = 0
let temps_final = 0
let comptador = 0
comptador = 0
basic.clearScreen()
basic.forever(function () {
    if (comptador == 10) {
        if (temps_final - temps_inici < 7000) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
basic.forever(function () {
    serial.writeLine("" + (temps_final - temps_inici))
    basic.pause(500)
})
basic.forever(function () {
    if (comptador == 1) {
        temps_inici = input.runningTime()
    }
})
