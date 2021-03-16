input.onButtonPressed(Button.A, function () {
    music.playTone(233, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Square)
        music.playMelody("C5 B E G C5 B E G ", 80)
    } else {
        basic.clearScreen()
    }
})
