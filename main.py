def check(x: number, y: number, player: number):
    global 明るさ
    if player == 1:
        明るさ = 255
    else:
        明るさ = 10
    if led.point_brightness(x - 2, y) == 明るさ and led.point_brightness(x - 1, y) == 明るさ:
        return 1
    if led.point_brightness(x - 1, y) == 明るさ and led.point_brightness(x + 1, y) == 明るさ:
        return 1
    if led.point_brightness(x + 1, y) == 明るさ and led.point_brightness(x + 2, y) == 明るさ:
        return 1
    if led.point_brightness(x, y - 2) == 明るさ and led.point_brightness(x, y - 1) == 明るさ:
        return 1
    if led.point_brightness(x, y - 1) == 明るさ and led.point_brightness(x, y + 1) == 明るさ:
        return 1
    if led.point_brightness(x, y + 1) == 明るさ and led.point_brightness(x, y + 2) == 明るさ:
        return 1
    if led.point_brightness(x + 2, y + 2) == 明るさ and led.point_brightness(x + 1, y + 1) == 明るさ:
        return 1
    if led.point_brightness(x + 1, y + 1) == 明るさ and led.point_brightness(x - 1, y - 1) == 明るさ:
        return 1
    if led.point_brightness(x - 1, y - 1) == 明るさ and led.point_brightness(x - 2, y - 2) == 明るさ:
        return 1
    if led.point_brightness(x - 2, y + 2) == 明るさ and led.point_brightness(x - 1, y + 1) == 明るさ:
        return 1
    if led.point_brightness(x - 1, y + 1) == 明るさ and led.point_brightness(x + 1, y - 1) == 明るさ:
        return 1
    if led.point_brightness(x + 1, y - 1) == 明るさ and led.point_brightness(x + 2, y - 2) == 明るさ:
        return 1
    return 0

def on_button_pressed_a():
    global カウンターx
    カウンターx += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global カウンターx, カウンターy, カウンター
    if カウンターx >= 4:
        カウンターx = 3
    if カウンターy >= 4:
        カウンターy = 3
    if カウンターx >= 1 and カウンターx <= 3:
        if not (led.point(カウンターx, カウンターy)):
            if カウンター % 2 == 1:
                led.plot_brightness(カウンターx, カウンターy, 255)
                if check(カウンターx, カウンターy, 1) == 1:
                    basic.pause(1000)
                    basic.show_string("Player1 win")
                    basic.clear_screen()
                    カウンター = 1
            else:
                led.plot_brightness(カウンターx, カウンターy, 10)
                if check(カウンターx, カウンターy, 2) == 1 and 1 == 1:
                    basic.pause(1000)
                    basic.show_string("Player2 win")
                    basic.clear_screen()
                    カウンター = 1
            カウンター += 1
        カウンターx = 0
        カウンターy = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global カウンターy
    カウンターy += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

明るさ = 0
カウンターy = 0
カウンターx = 0
カウンター = 0
カウンター = 1
カウンターx = 0
カウンターy = 0