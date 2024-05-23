
function add() {
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    var result = fnum + snum;
    document.getElementById("rsu").innerHTML = result ;
}; 

function subtract() {
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    var result = fnum - snum;
    document.getElementById("rsu").innerHTML = result ;
};

function multiply() {
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    var result = fnum * snum;
    document.getElementById("rsu").innerHTML = result ;
};

function divided() {
    var fnum = parseInt(document.getElementById("firstnum").value);
    var snum = parseInt(document.getElementById("secondnum").value);
    var result = fnum / snum;
    document.getElementById("rsu").innerHTML = result ;
};