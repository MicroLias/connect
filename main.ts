let Dann_fahre_wie_gesagt = 0
basic.showString("Hallo Jesus ")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    radio.receivedPacket(RadioPacketProperty.SignalStrength)
    )
    Dann_fahre_wie_gesagt = 0
})
