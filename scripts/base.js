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
        return selectedText;
    }
}

function click_handler(ev) {
    //alert(ev.type);
    var rect = this.getBoundingClientRect();
    var left = ev.clientX - rect.left - this.clientLeft + this.scrollLeft;
    var top = ev.clientY - rect.top - this.clientTop + this.scrollTop;
    var selectedContent = doSomethingWithSelectedText();
    $('#results-container').append('<b>event type: </b>' + ev.type + ' <b>left:</b> ' + left + ' <b>top:</b> ' + top + '\n');
    if (ev.type === "mouseup" && selectedContent) {
        $('#results-container').append('<b>selected content:</b><p class="selected-content">' + selectedContent + '</p>\n\n');
    }
    var dot = document.createElement('div');
    dot.setAttribute('style', 'position:absolute; color: #000; width: 5px; height: 5px; top: '+top+'px; left: '+left+'px; background: red; border:1px solid red; border-radius: 10px;');
    this.appendChild(dot);
}

 $(document).ready(function() {
    var watchElemID = document.getElementById("content");
    console.log(watchElemID);    
    watchElemID.addEventListener('mousedown', click_handler, false);
    watchElemID.addEventListener('mouseup', click_handler, false);
    
});

//