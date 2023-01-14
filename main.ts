function check (x: number, y: number, player: number) {
    if (player == 1) {
        明るさ = 255
    } else {
        明るさ = 10
    }
    if (led.pointBrightness(x - 2, y) == 明るさ && led.pointBrightness(x - 1, y) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x - 1, y) == 明るさ && led.pointBrightness(x + 1, y) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x + 1, y) == 明るさ && led.pointBrightness(x + 2, y) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x, y - 2) == 明るさ && led.pointBrightness(x, y - 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x, y - 1) == 明るさ && led.pointBrightness(x, y + 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x, y + 1) == 明るさ && led.pointBrightness(x, y + 2) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x + 2, y + 2) == 明るさ && led.pointBrightness(x + 1, y + 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x + 1, y + 1) == 明るさ && led.pointBrightness(x - 1, y - 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x - 1, y - 1) == 明るさ && led.pointBrightness(x + 2, y + 2) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x - 2, y + 2) == 明るさ && led.pointBrightness(x - 1, y + 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x - 1, y + 1) == 明るさ && led.pointBrightness(x + 1, y - 1) == 明るさ) {
        return 1
    }
    if (led.pointBrightness(x + 1, y - 1) == 明るさ && led.pointBrightness(x + 2, y - 2) == 明るさ) {
        return 1
    }
    return 0
}
input.onButtonPressed(Button.A, function () {
    カウンターx += 1
})
input.onButtonPressed(Button.AB, function () {
    if (カウンターx >= 4) {
        カウンターx = 3
    }
    if (カウンターy >= 4) {
        カウンターy = 3
    }
    if (カウンターx >= 1 && カウンターx <= 3) {
        if (!(led.point(カウンターx, カウンターy))) {
            if (カウンター % 2 == 1) {
                led.plotBrightness(カウンターx, カウンターy, 255)
                if (check(カウンターx, カウンターy, 1) == 1) {
                    basic.pause(1000)
                    basic.showString("Player1 win")
                    basic.clearScreen()
                    カウンター = 1
                }
            } else {
                led.plotBrightness(カウンターx, カウンターy, 10)
                if (check(カウンターx, カウンターy, 2) == 1 && 1 == 1) {
                    basic.pause(1000)
                    basic.showString("Player2 win")
                    basic.clearScreen()
                    カウンター = 1
                }
            }
            カウンター += 1
        }
        カウンターx = 0
        カウンターy = 0
    }
})
input.onButtonPressed(Button.B, function () {
    カウンターy += 1
})
let 明るさ = 0
let カウンターy = 0
let カウンターx = 0
let カウンター = 0
カウンター = 1
カウンターx = 0
カウンターy = 0
