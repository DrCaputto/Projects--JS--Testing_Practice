function capitalize(string) {
    if (Array.isArray(string) === true) {
        let ary = string.slice(1)
        let str = string[0]
        let join = []

        str = str.toUpperCase()
        join.push(str)
        return join.concat(ary)
    } else {
        return string[0].toUpperCase() + string.slice(1);
    }
}
// capitalize()

module.exports = capitalize