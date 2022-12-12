const $ = document.querySelector.bind(document);
$('#listing-menu .btn-tab-bar').click(function() {
    $('#listing-menu .btn-tab-bar.active').removeClass("active")
    $(this).addClass("active")
});
//
function showModalMenu() {
    $(".modal-nav").style.display = "block";
}

function hideModalMenu() {
    $(".modal-nav").style.display = "none";
}
const modalNav = $(".modal-nav");
const modalContainer = $(".modal-container");

$(".icon-responsive").onclick = showModalMenu;

modalContainer.onclick = (e) => e.stopPropagation();
modalNav.onclick = hideModalMenu;
$(".modal-close").onclick = hideModalMenu;