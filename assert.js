
var assert = {
    isTruthy: function (assertionToCheck) {
        if (!assertionToCheck) {
            this.log.push(Error("Assertion failed: " + assertionToCheck + " is not truthy"))
        } else this.log.push(`Pass: ${assertionToCheck} is truthy`)
    },
    isEqual: function (assertionOne, assertionTwo) {
        if (assertionOne !== assertionTwo) {
            this.log.push(Error(`Assertion failed: ${assertionOne} and ${assertionTwo} do not match`))
        } else this.log.push(`Pass: ${assertionOne} == ${assertionTwo}`)

    },
    isSameObject: function(assertionOne, assertionTwo) {
        if (!Object.is(assertionOne, assertionTwo)) {
            this.log.push(Error(`Assertion failed: ${assertionOne} and ${assertionTwo} are not the same object`))
        } else this.log.push(`Pass: ${assertionOne} and ${assertionTwo} are the same object`)
    },
    isIncluded: function (assertionOne, assertionTwo) {
        if (!assertionOne.includes(assertionTwo)) {
            this.log.push(Error(`Assertion failed: ${assertionOne} does not include ${assertionTwo}`))
        } else this.log.push(`Pass: ${assertionOne} includes ${assertionTwo}`)
    },
    log: [],
    showLog: function () {
        this.log.forEach(err => {
            if ((typeof err) === 'string') {
                console.log(err)
            } else {
                console.log(`${err.name} Message: ${err.message}`);
                console.log(`Stack trace: ${err.stack}`)
            }
        })
    }
};






