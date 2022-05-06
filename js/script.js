const elHamburgerBtn = document.querySelector(".sitenav__hamburger")

const elHeader = document.querySelector(".site-header")

elHamburgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle("site-header--open")
})