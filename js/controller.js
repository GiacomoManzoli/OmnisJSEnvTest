'use strict';

var errors = [];
var features = [];

function addError(error) {
    errors.push(error);
} 

function addFeature(f) {
    features.push(f);
}

function printNavigatorInfo(elem) {
    var keys = ["appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "vendor"];

    var table = document.createElement('table');

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = key;
        row.insertCell(1).innerHTML = navigator[key];
    }
    elem.appendChild(table);
}

function printList(elem, list) {
    for (var i = 0; i < list.length; i++) {
        var x = list[i];
        var li = document.createElement("li");
        li.innerText = x;
        elem.appendChild(li);
    }
}


function checkClass() {
    try {
        class X {
            constructor(x) {
                this.x = x;
            }
            method() {
                return this.x;
            }
        }
        var x = new X(2);
        x.method();
    } catch (error) {
        addError("Class");
    }
    addFeature("Class");
}

function checkArray() {
    var x = [];
    x.every? addFeature("Array.every") : addError("Array.every");
    x.map ? addFeature("Array.map") : addError("Array.map");
    x.reduce ? addFeature("Array.reduce") : addError("Array.reduce");
    x.forEach ? addFeature("Array.forEach") : addError("Array.forEach");
    x.filter ? addFeature("Array.filter") : addError("Array.filter");
    x.find ? addFeature("Array.find") : addError("Array.find");
    x.findIndex ? addFeature("Array.findIndex") : addError("Array.findIndex");
    x.some ? addFeature("Array.some") : addError("Array.some");
    x.includes ? addFeature("Array.includes") : addError("Array.includes");
}

function checkClasses() {
    typeof Map !== undefined? addFeature("Map") : addError("Map");
    typeof Set !== undefined ? addFeature("Set") : addError("Set");
    typeof Symbol !== undefined ? addFeature("Symbol") : addError("Symbol");
    typeof WeakMap !== undefined ? addFeature("WeakMap") : addError("WeakMap");
    typeof WeakSet !== undefined ? addFeature("WeakSet") : addError("WeakSet");
    typeof Promise !== undefined ? addFeature("Promise") : addError("Promise");
    typeof RegExp !== undefined ? addFeature("RegExp") : addError("RegExp");
    typeof Math !== undefined ? addFeature("Math") : addError("Math");
    typeof Number !== undefined ? addFeature("Number") : addError("Number");
}

function checkDeclaration() {
    try {
        eval("let x = 1;");
        addFeature("let");          
    } catch (e) {
        addError("let");
    }
    try {
        eval("const y = 1;");   
        addFeature("const");          
    } catch (e) {
        addError("const");
    }
}

function checkArrow() {
    try {
        eval("var x = (y) => y+1;");
        addFeature("Arrow Function");
    } catch(e) {
        console.log(e);
        addError("Arrow Function");
    }
}


function main() {
    var browserInfo = document.querySelector("#browser-info");
    printNavigatorInfo(browserInfo);

    checkClass();
    checkArray();
    checkClasses();
    checkDeclaration();
    checkArrow();

    console.log("Feature:", features);
    console.log("Errors:", errors);

    var errorsInfo = document.querySelector("#errors-info");
    printList(errorsInfo, errors);

    var featuresInfo = document.querySelector("#features-info");
    printList(featuresInfo, features);
}

main();
console.log("Done!");



/*
function createTable() {
    function createTable() {
        // Create table.
        var table = document.createElement('table');
        // Insert New Row for table at index '0'.
        var row1 = table.insertRow(0);
        // Insert New Column for Row1 at index '0'.
        var row1col1 = row1.insertCell(0);
        row1col1.innerHTML = 'Col1';
        // Insert New Column for Row1 at index '1'.
        var row1col2 = row1.insertCell(1);
        row1col2.innerHTML = 'Col2';
        // Insert New Column for Row1 at index '2'.
        var row1col3 = row1.insertCell(2);
        row1col3.innerHTML = 'Col3';
        // Append Table into div.
        var div = document.getElementById('divTable');
        div.appendChild(table);
    }
}*/