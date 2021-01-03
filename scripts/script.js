/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var shopItem ;

shopItem = document.querySelector("section.shopitems img");

shopItem.addEventListener("click", changeImage);

function changeImage() {
shopItem.classList.add("shopItem");
}
