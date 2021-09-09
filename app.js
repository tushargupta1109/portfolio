$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

const text = ["Student", 'Developer', 'Engineer'];
let count = 0;
let index = 0;
let currtext = "";
let letter = '';

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currtext = text[count];
    letter = currtext.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currtext.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);
})();