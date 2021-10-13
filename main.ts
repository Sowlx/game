input.onButtonPressed(Button.A, function () {
    if (Number_1 + Number_2 < 10) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        Number_1 = randint(1, 10)
        Number_2 = randint(1, 10)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Number_1 = randint(1, 10)
        Number_2 = randint(1, 10)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Number_1)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.showNumber(Number_2)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (Number_1 + Number_2 >= 10) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        Number_1 = randint(1, 10)
        Number_2 = randint(1, 10)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Number_1 = randint(1, 10)
        Number_2 = randint(1, 10)
    }
})
let Number_2 = 0
let Number_1 = 0
Number_1 = randint(1, 10)
Number_2 = randint(1, 10)
