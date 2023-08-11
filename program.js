function run(){
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("Css-code").value;
    let jscode = document.getElementById("Js-code").value;
    let output = document.getElementById("output");
    
    
    
    output.contentDocument.body.innerHTML = htmlcode + "<style>"+ csscode + "<style>";
    output.contentWindow.eval(jscode);
    }