let X_tilt = Math.atan2(input.acceleration(Dimension.X), 0)
basic.forever(function () {
    basic.showNumber(Math.round(57.2957795131 * Math.atan2(input.acceleration(Dimension.X), 0)))
    if (X_tilt <= -600) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
