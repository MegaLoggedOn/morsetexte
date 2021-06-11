enum RadioMessage {
    Beep = 9406,
    Boop = 19838,
    SOUND = 45137,
    message1 = 49434
}
function DGKORSUW () {
    if (letter[0] == 0) {
        if (letter[1] == 0) {
            if (letter[2] == 0) {
                basic.showString("S")
                liste_de_textes.push("S")
            } else {
                basic.showString("U")
                liste_de_textes.push("U")
            }
        } else {
            if (letter[2] == 0) {
                liste_de_textes.push("R")
                basic.showString("R")
            } else {
                basic.showString("W")
                liste_de_textes.push("W")
            }
        }
    } else {
        if (letter[1] == 0) {
            if (letter[2] == 0) {
                basic.showString("D")
                liste_de_textes.push("D")
            } else {
                basic.showString("K")
                liste_de_textes.push("K")
            }
        } else {
            if (letter[2] == 0) {
                basic.showString("G")
                liste_de_textes.push("G")
            } else {
                basic.showString("O")
                liste_de_textes.push("K")
            }
        }
    }
}
function AIMN () {
    if (letter[0] == 0) {
        if (letter[1] == 0) {
            liste_de_textes.push("I")
            basic.showString("I")
        } else {
            liste_de_textes.push("A")
            basic.showString("A")
        }
    } else {
        if (letter[1] == 0) {
            liste_de_textes.push("N")
            basic.showString("N")
        } else {
            liste_de_textes.push("M")
            basic.showString("M")
        }
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Beep)
})
function HV () {
    if (letter[3] == 0) {
        basic.showString("H")
        liste_de_textes.push("H")
    } else {
        basic.showString("V")
        liste_de_textes.push("V")
    }
}
function PJ () {
    if (letter[3] == 0) {
        basic.showString("P")
        liste_de_textes.push("P")
    } else {
        basic.showString("J")
        liste_de_textes.push("J")
    }
}
function BCFHJLPQVXYZ () {
    if (letter[0] == 0) {
        if (letter[1] == 0) {
            if (letter[2] == 0) {
                HV()
            } else {
                basic.showString("F")
                liste_de_textes.push("F")
            }
        } else {
            if (letter[2] == 0) {
                basic.showString("L")
                liste_de_textes.push("L")
            }
        }
    } else {
        if (letter[1] == 0) {
            if (letter[2] == 0) {
                BX()
            } else {
                CY()
            }
        } else {
            if (letter[3] == 0) {
                basic.showString("Z")
                liste_de_textes.push("Z")
            } else {
                basic.showString("Q")
                liste_de_textes.push("Q")
            }
        }
    }
}
radio.onReceivedMessage(RadioMessage.Beep, function () {
    letter.push(0)
    music.playTone(262, 200)
})
radio.onReceivedMessage(RadioMessage.SOUND, function () {
    if (letter.length == 2) {
        AIMN()
    } else if (letter.length == 3) {
        DGKORSUW()
    } else if (letter.length == 4) {
        BCFHJLPQVXYZ()
    } else {
        ET()
    }
    letter = []
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.SOUND)
})
function BX () {
    if (letter[3] == 0) {
        basic.showString("B")
        liste_de_textes.push("B")
    } else {
        liste_de_textes.push("X")
        basic.showString("X")
    }
}
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.Boop)
})
input.onPinPressed(TouchPin.P1, function () {
    control.reset()
})
function ET () {
    if (letter[0] == 0) {
        basic.showString("E")
        liste_de_textes.push("E")
    } else {
        basic.showString("T")
        liste_de_textes.push("T")
    }
}
function CY () {
    if (letter[3] == 0) {
        basic.showString("C")
        liste_de_textes.push("C")
    } else {
        basic.showString("Y")
        liste_de_textes.push("Y")
    }
}
radio.onReceivedMessage(RadioMessage.Boop, function () {
    letter.push(1)
    music.playTone(262, 500)
})
let X = 0
let liste_de_textes: string[] = []
let letter: number[] = []
radio.setGroup(8)
letter = []
liste_de_textes = []
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
basic.forever(function () {
    while (X != liste_de_textes.length) {
        lcd1602.putString(
        liste_de_textes[X],
        X,
        0
        )
        X += 1
    }
    X = 0
})
