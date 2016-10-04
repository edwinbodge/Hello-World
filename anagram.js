function myFunction() {
    var x = document.getElementById("frm1");
    var myword1 = x.elements[0].value;
    var myword2 = x.elements[1].value;
    document.getElementById("demo1").innerHTML = myword1;
    document.getElementById("demo2").innerHTML = myword2;
}
