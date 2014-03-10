(function() {
   "use strict";
    var form = document.getElementById("theForm");
    var textarea = form.textyarea;
    var text = form.texty;
    addEventListener("submit", function(event) {
       event.preventDefault();
       if ( textarea.value === "" ) {
            textarea.className = "error";
       }
       if ( text.value === "" ) {
            text.className = "error";
       }

    });
}())
