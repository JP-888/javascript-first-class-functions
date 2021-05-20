function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    const myFunc = () => {}
    return myFunc
}

function returnsAnAnonymousFunction() {
    return () => {}
}