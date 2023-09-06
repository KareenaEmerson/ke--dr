input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("\"sos\"")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
})
radio.setGroup(237)
