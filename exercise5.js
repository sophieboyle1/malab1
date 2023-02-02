function string_length(value) {
    return value.length;
}
;
console.log("The length is " + string_length("test 1"));
function string_nospaces(value) {
    return value.replace(" ", "").length;
}
;
console.log("The length with no space is " + string_nospaces("test 1"));
function both_methods(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(both_methods("test 1", true));
