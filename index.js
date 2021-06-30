

let returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

let returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    }
}

function fareDoubler(x) {
    return x*2
}

function fareTripler(x) {
    return x*3
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}