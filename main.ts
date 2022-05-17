function chkB () {
    if (input.buttonIsPressed(Button.B) && bBr) {
        bBr = false
        bBp = true
        t = input.runningTime()
    }
    if (bBp) {
        ttB = input.runningTime() - t
        ttA = input.runningTime()
        if (ttB <= dt1) {
            qp = 4
        } else if (ttB <= dt2) {
            qp = 3
        } else {
            qp = 0
        }
    }
    if (!(input.buttonIsPressed(Button.B))) {
        if (bBp) {
            bBp = false
            bBr = true
            if (qp != s[np]) {
                end = true
                basic.showIcon(IconNames.No)
            } else {
                pq(qp)
            }
            np += 1
            ttB = input.runningTime()
        } else if (input.runningTime() - ttB > dt3) {
            end = true
            basic.showIcon(IconNames.No)
        }
    }
}
function pq2 (bri: number) {
    y = 0
    for (let index = 0; index < 2; index++) {
        x = 0
        for (let index = 0; index < 2; index++) {
            led.plotBrightness(x + x0, y + y0, bri)
            x += 1
        }
        y += 1
    }
}
function pq (q: number) {
    if (q == 1) {
        x0 = 3
        y0 = 0
    } else if (q == 2) {
        x0 = 0
        y0 = 0
    } else if (q == 3) {
        x0 = 0
        y0 = 3
    } else if (q == 4) {
        x0 = 3
        y0 = 3
    }
    pq2(255)
    basic.pause(500)
    pq2(0)
}
function pt (bri: number) {
    basic.clearScreen()
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x, 2, bri)
        x += 1
    }
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(2, y, bri)
        y += 1
    }
}
function chkA () {
    if (input.buttonIsPressed(Button.A) && bAr) {
        bAr = false
        bAp = true
        t = input.runningTime()
    }
    if (bAp) {
        ttA = input.runningTime() - t
        ttB = input.runningTime()
        if (ttA <= dt1) {
            qp = 2
        } else if (ttA <= dt2) {
            qp = 1
        } else {
            qp = 0
        }
    }
    if (!(input.buttonIsPressed(Button.A))) {
        if (bAp) {
            bAp = false
            bAr = true
            if (qp != s[np]) {
                end = true
                basic.showIcon(IconNames.No)
            } else {
                pq(qp)
            }
            np += 1
            ttA = input.runningTime()
        } else if (input.runningTime() - ttA > dt3) {
            end = true
            basic.showIcon(IconNames.No)
        }
    }
}
function st () {
    basic.pause(500)
    pt(0)
    basic.pause(100)
    pt(25)
    basic.pause(500)
    qs = randint(1, 4)
    s.push(qs)
    for (let index = 0; index <= ns; index++) {
        pq(s[index])
        basic.pause(500)
    }
    pt(0)
    basic.pause(100)
    pt(25)
}
let qs = 0
let y0 = 0
let x0 = 0
let x = 0
let y = 0
let qp = 0
let t = 0
let ttB = 0
let ttA = 0
let np = 0
let ns = 0
let s: number[] = []
let end = false
let bBp = false
let bBr = false
let bAp = false
let bAr = false
let dt3 = 0
let dt2 = 0
let dt1 = 0
dt1 = 500
dt2 = 1000
dt3 = 2000
bAr = true
bAp = false
bBr = true
bBp = false
end = false
s = []
ns = 0
while (!(end)) {
    st()
    np = 0
    ttA = input.runningTime()
    ttB = input.runningTime()
    while (!(end) && np <= ns) {
        chkA()
        if (!(end)) {
            chkB()
        }
    }
    ns += 1
}
basic.pause(1000)
basic.showNumber(ns - 1)
