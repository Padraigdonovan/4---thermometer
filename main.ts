let temp = 0
input.onGesture(Gesture.Shake, function () {
    temp = input.temperature()
    basic.showNumber(temp)
})
basic.forever(function () {
	
})
