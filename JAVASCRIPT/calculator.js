function insert(num) {
    document.getElementById('screen').value = document.getElementById('screen').value + num
}

function deleteScreen() {
    document.getElementById("screen").value = '';
}

function equal() {
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}