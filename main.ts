input.onGesture(Gesture.Shake, function () {
    if (randint(1, 3) == 1) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
        basic.clearScreen()
    } else if (randint(1, 3) == 2) {
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
