let raz_block= $("#raz_block");
let raz = $("#raz");
let content = $("#content");
let sver = $("#sver");

raz.on("click", function(event){
    event.preventDefault();
    content.addClass("content__input");
    content.removeClass("hide");
    raz_block.addClass("hide")
});
sver.on("click", function(event){
    event.preventDefault();
    content.removeClass("content__input");
    content.addClass("hide");
    raz_block.removeClass("hide");
    raz_block.addClass("raz");
});