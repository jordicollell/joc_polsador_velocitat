input.onPinPressed(TouchPin.P0, function () {
    comptador += 1
    temps_final = input.runningTime()
    if (comptador == 1) {
        temps_inici = input.runningTime()
    }
})
// Posar zero
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    comptador = 0
    temps_final = 0
})
let temps = 0
let temps_inici = 0
let temps_final = 0
let comptador = 0
comptador = 0
basic.clearScreen()
basic.forever(function () {
    temps = temps_final - temps_inici
    if (comptador == 6) {
        if (temps > 3000) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        }
        if (temps < 3000 && temps >= 2500) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                # # . . .
                `)
        }
        if (temps < 2500 && temps >= 2000) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # . .
                # # # . .
                `)
        }
        if (temps < 2000 && temps >= 1500) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # # .
                . # # # .
                # # # # .
                `)
        }
        if (temps < 1500) {
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . # # # #
                # # # # #
                `)
        }
    }
})
