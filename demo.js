var input = document.getElementById("input");
var showpage = document.getElementById("main");
var result = document.getElementById("result");

function callback() {
    showpage.textContent = input.value;
}

function update() {
    var text = showpage.textContent;
    var words = text.trim().split(/\s+/); // Split by spaces and remove extra spaces
    var wordCount = words.length;
    result.textContent = "Word Count: " + wordCount;
}


    