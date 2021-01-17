/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var sort;
sort = document.querySelector("section.sort");

var openSort;
openSort = document.querySelector("section.view button:nth-of-type(2)");

openSort.addEventListener("click", openingSort);

function openingSort(event) {
sort.classList.toggle("sort");
}
