function 右にまわる (時間秒: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P14, 512)
    pins.analogWritePin(AnalogPin.P16, 512)
    basic.pause(時間秒 * 1000)
    とまる()
}
function とまる () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    走る(100, 100, 4.1)
    右にまわる(0.5)
})
function 走る (左スピード: number, 右スピード: number, 時間秒: number) {
    if (左スピード < 0) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    if (右スピード < 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    pins.analogWritePin(AnalogPin.P14, Math.map(Math.abs(右スピード), 0, 100, 0, 1023))
    pins.analogWritePin(AnalogPin.P16, Math.map(Math.abs(左スピード), 0, 100, 0, 1023))
    basic.pause(時間秒 * 1000)
    とまる()
}
input.onButtonPressed(Button.B, function () {
    走る(100, 50, 2)
    走る(50, 100, 3)
})
function 左にまわる (時間秒: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 512)
    pins.analogWritePin(AnalogPin.P16, 512)
    basic.pause(時間秒 * 1000)
    とまる()
}
led.enable(false)
pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0 || pins.digitalReadPin(DigitalPin.P7) == 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P14, 512)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.analogWritePin(AnalogPin.P16, 512)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
