//==NEW INGREDIENT==//

function addIngredient() {

    const ingredients = document.querySelector("#ingredients");

    const fieldContainer = document.querySelectorAll(".ingredient");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);


    if (newField.children[0].value == "") return false;

    newField.children[0].value = "";

    ingredients.appendChild(newField);
}

const ingredients = document.querySelector(".add-ingredient")


if (ingredients) {

    ingredients.addEventListener("click", addIngredient);
}
//==NEW STEP ==//

function addPreparation() {

    const preparation = document.querySelector("#preparation");
    const fieldContainer = document.querySelectorAll(".preparation");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;


    newField.children[0].value = "";

    preparation.appendChild(newField);
}

const preparation = document.querySelector(".add-preparation");

if (preparation) {

    preparation.addEventListener("click", addPreparation);

}

//==PAGINATION==//
function paginate(selectedPage, totalPages) {

    let pages = [],
        oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

        const firstAndLastPage = currentPage == 1 || currentPage == totalPages
        const pagesAfterSelectedPage = currentPage <= selectedPage + 2
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 2

        if (firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {

            if (oldPage && currentPage - oldPage > 2) {
                pages.push("...")
            }

            if (oldPage && currentPage - oldPage == 2) {
                pages.push(currentPage - 1)
            }
            pages.push(currentPage)

            oldPage = currentPage
        }
    }
    return pages
}

function createPagination(pagination) {
    const filter = pagination.dataset.filter
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const pages = paginate(page, total)

    let elements = ""

    for (let page of pages) {
        if (String(page).includes("...")) {
            elements += `<span>${page}</span>`
        } else {
            if (filter) {
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            } else {
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements
}
const pagination = document.querySelector(".pagination")

if (pagination) {
    createPagination(pagination)
}