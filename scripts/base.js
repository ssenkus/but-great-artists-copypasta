function getSelectedText() {
    var text = "";
    if (typeof window.getSelection !== "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection !== "undefined" && document.selection.type === "Text") {
        text = document.selection.createRange().text;
    }
    return text;
}
    
function doSomethingWithSelectedText() {
    var selectedText = getSelectedText();
    if (selectedText) {
  // DISABLED      alert("SELECTED TEXT: \n\"" + selectedText + "\"");
    }
}

function click_handler(ev) {
    var rect = this.getBoundingClientRect();
    var left = ev.clientX - rect.left - this.clientLeft + this.scrollLeft;
    var top = ev.clientY - rect.top - this.clientTop + this.scrollTop;

    console.log('left: ' + left + '\ntop: ' + top);
    var dot = document.createElement('div');
    dot.setAttribute('style', 'position:absolute; width: 2px; height: 2px; top: '+top+'px; left: '+left+'px; background: red;');
    this.appendChild(dot);
}



document.onmouseup = doSomethingWithSelectedText;
document.onkeyup = doSomethingWithSelectedText;

$(document).ready(function() {
    var watchElemID = document.getElementById("content");
    console.log(watchElemID);    
    watchElemID.addEventListener('click', click_handler, false);
    
});

//