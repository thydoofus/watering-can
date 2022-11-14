let X_tilt = Math.round(input.acceleration(Dimension.X))
basic.forever(function () {
    // Activates when watering can tilt pass certain angle
    if (Math.round(input.acceleration(Dimension.X)) < -700) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C E G C5 C5 G E C ", 120)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
