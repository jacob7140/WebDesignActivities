var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("show_results").onclick = showresult;
    $("add").onclick = addHeight;
    $("display_height").onclick = displayHeight;
};

function showresult() {
    var sumHeights = 0;
    var averageHeights = 0.0;
    var maxHeight = 0;

    for (var i = 0; i < height.length; i++){
        sumHeights += height[i];
        if (height[i] > maxHeight) {
            maxHeight = height[i];
        }
    }

    averageHeights = sumHeights / height.length;
    $("result").innerHTML = "<h2>Results</h2>" + "<p>Average Height = " + averageHeights + "<br/>" + "Highest heigh = " + maxHeight + "</p>";
}

function displayHeight() {
    var data = "<tr><td><b>Name</b></td><td><b>Heights</b></td>";

    for (var i = 0; i < height.length; i++) {
        data += "<td>" + names[i] + "</td>" + "<td>" + height[i] + "</td></tr>"
    }

    $("height_table").innerHTML = "<h2>Heights</h2>" + data;
}

function addHeight() {
    var inputName = document.getElementById("name").value;
    var inputHeight = document.getElementById("height").value;

    document.getElementById("name").focus();

    if (inputName == "" || inputHeight < 0 || inputHeight > 100) {
        alert("You must enter a name and valid height.");

    } else {
        names.push(inputName);
        height.push(inputHeight);
        showresult();
        displayHeight();
    }
}

