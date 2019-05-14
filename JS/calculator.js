function WIP() {
    document.getElementById('resultField').value = "Work In Progress";
}

function clear_value(field) {
    // alert(field);
    if (field == 1) {
        document.getElementById('value_1').value = null;
    }
    if (field == 2) {
        document.getElementById('value_2').value = null;
    }
}

function checkType(val1, val2) {
    var res1 = parseFloat(val1);
    var res2 = parseFloat(val2);
    if (isNaN(res1) || isNaN(res2)) {
        return "Not a number";
    } else {
        return "OK";
    }
}

function add(val1, val2) {
    val1 = document.getElementById('value_1').value;
    val2 = document.getElementById('value_2').value;
    var result = 0;
    var typeControl = checkType(val1, val2);
    if (typeControl == "OK") {
        result = parseFloat(val1) + parseFloat(val2);
    } else {
        result = 0;
    }
    document.getElementById('resultField').value = result;
}