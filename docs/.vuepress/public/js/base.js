
function visualizeFunc() {
    // alert("function visualizeFunc()")
    if (document.getElementById("regexChart")) {
        document.getElementById("regex").removeChild(document.getElementById("regexChart"));
        var iframe = document.createElement("iframe");
        var inputreg = document.getElementById("regexInput").value;
        iframe.setAttribute("id", "regexChart");
        iframe.setAttribute("src", "https://jex.im/regulex/#!embed=true&flags=&re=" + encodeURIComponent(inputreg));
        iframe.setAttribute("height", 300);
        iframe.setAttribute("width", 800);
        document.getElementById("regex").appendChild(iframe);
    }
    document.getElementById("visualizeTips").innerHTML = "可视化结果如下↓";
}
