// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const findMatching = function (drivers, string) {
    return drivers.filter(item => item.toUpperCase() === string.toUpperCase())
}

const fuzzyMatch = function (drivers,string) {
    return drivers.filter(item => item.startsWith(string))
}

const matchName = function (drivers, string) {
    return drivers.filter(item => item.name === string)
}
