let X_tilt = Math.round(input.acceleration(Dimension.X))
basic.forever(function () {
    if (Math.round(input.acceleration(Dimension.X)) < -700 && Math.round(input.acceleration(Dimension.Z)) > 5000) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
