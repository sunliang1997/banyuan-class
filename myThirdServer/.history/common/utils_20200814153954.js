function checkName(name) {
    let partten = /[a-zA-Z0-9_-]{4,16}/
    return partten.test(name)
}