function myFunction() {
    var x = document.getElementById("frm1");
    var myword1 = x.elements[0].value;
    var myword2 = x.elements[1].value;
    document.getElementById("demo1").innerHTML = myword1;
    document.getElementById("demo2").innerHTML = myword2;
}

function checkAnagram() {
    var x = document.getElementById("frm1");
    var word1 = x.elements[0].value;
    var word2 = x.elements[1].value;
    // var regex = /[^a-z0-9]/gi;
    var sortedWord1 = sortMyString(word1);
    var sortedWord2 = sortMyString(word2);
    var answer = sortedWord1 === sortedWord2;
    document.getElementById("demo1").innerHTML = "Something happened!";
    document.getElementById("demo2").innerHTML = answer;
}

function sortMyString(str) {
    var regex = /[^a-z0-9]/gi;
    return str.replace(regex,'').toLowerCase().split('').sort().join('');
}
