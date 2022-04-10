kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
let snelheid = 0
basic.forever(function () {
    kitronik_VIEW128x64.plot(snelheid * 3)
})
