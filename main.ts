MbitMore.onReceivedTextWithLabel("RIGHT", function (textData) {
    if (textData == "S") {
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (textData == "B") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    } else if (textData == "F") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
})
MbitMore.onReceivedNumberWithLabel("MOTOR", function (numberData) {
    if (numberData > 0) {
        モーター角度 = モーター角度 + numberData
        if (モーター角度 > 180) {
            モーター角度 = 180
        }
        maqueen.servoRun(maqueen.Servos.S1, モーター角度)
    } else if (numberData < 0) {
        モーター角度 = モーター角度 + numberData
        if (モーター角度 < 0) {
            モーター角度 = 0
        }
        maqueen.servoRun(maqueen.Servos.S1, モーター角度)
    }
})
MbitMore.onReceivedTextWithLabel("LEFT", function (textData) {
    if (textData == "S") {
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (textData == "B") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else if (textData == "F") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
})
let モーター角度 = 0
MbitMore.startService()
モーター角度 = 0
maqueen.servoRun(maqueen.Servos.S1, モーター角度)
basic.forever(function () {
	
})
