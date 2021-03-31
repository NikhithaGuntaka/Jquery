$(document).ready(() => {
    var btn = $("button");
    var p = $("p");
    btn.click(() => {
        var value = $("textarea#ta").val();
        p.text(value);
    });
    p.click(() => {
        p.html("&#128400");
        p.css("font-size", "2rem");
    })
})