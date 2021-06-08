maqueen.IR_callbackUser(function (message) {
    if (message == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (message == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (message == 20) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 22) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 8) {
        S = S + 3
        maqueen.servoRun(maqueen.Servos.S1, S)
    }
    if (message == 10) {
        S = S - 3
        maqueen.servoRun(maqueen.Servos.S1, S)
    }
})
let S = 0
S = 120
maqueen.servoRun(maqueen.Servos.S1, S)
