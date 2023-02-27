input.onButtonPressed(Button.A, function () {
    velocidad += 50
})
input.onButtonPressed(Button.AB, function () {
    velocidad = 200
})
input.onButtonPressed(Button.B, function () {
    velocidad += -50
})
let velocidad = 0
velocidad = 200
basic.clearScreen()
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(velocidad)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(velocidad)
})
