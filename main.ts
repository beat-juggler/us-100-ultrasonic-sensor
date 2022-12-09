let distance = 0
/**
 * python -m serial.tools.list_ports
 * 
 * putty
 */
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P5,
    DigitalPin.P6,
    PingUnit.Centimeters
    )
    serial.writeLine("" + (distance))
    serial.writeLine("")
    basic.pause(200)
})
