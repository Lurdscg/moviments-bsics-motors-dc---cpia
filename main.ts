input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    microshield.MotorStop(microshield.Motors.M1)
    microshield.MotorStop(microshield.Motors.M3)
})
input.onButtonPressed(Button.A, function () {
    microshield.MotorRun(microshield.Motors.M1, 50)
    microshield.MotorRun(microshield.Motors.M3, 100)
})
input.onButtonPressed(Button.B, function () {
    microshield.MotorRun(microshield.Motors.M1, 100)
    microshield.MotorRun(microshield.Motors.M3, 50)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    microshield.MotorRun(microshield.Motors.M1, 100)
    microshield.MotorRun(microshield.Motors.M3, 100)
})
