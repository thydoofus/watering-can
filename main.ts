let X_tilt = Math.round(input.acceleration(Dimension.X))
basic.forever(function () {
    if (57.2957795131 * Math.atan2(input.acceleration(Dimension.X), 0) > 40) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
