'use strict';

const elementToggleFunc = function (elem) {
    elem.classList.toggle('active');
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// Loop through select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerHTML.toLowerCase();
        selectValue.innerHTML = this.innerHTML;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Filter function
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
};

// Add event listeners to all filter buttons
let lastClickBtn = filterBtn[0];
if (lastClickBtn) {
    lastClickBtn.classList.add("active");
}

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        filterFunc(selectedValue);

        if (lastClickBtn) {
            lastClickBtn.classList.remove("active");
        }
        this.classList.add("active");
        lastClickBtn = this;
    });
}

// Page navbar
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        // Remove the active class from all pages and nav links
        for (let j = 0; j < pages.length; j++) {
            pages[j].classList.remove("active");
        }
        for (let k = 0; k < navigationLinks.length; k++) {
            navigationLinks[k].classList.remove("active");
        }

        // Add the active class to the clicked link and the corresponding page
        this.classList.add("active");
        let pageToActivate = this.innerHTML.toLowerCase();
        for (let j = 0; j < pages.length; j++) {
            if (pages[j].dataset.page === pageToActivate) {
                pages[j].classList.add("active");
                window.scrollTo(0, 0);
                break;
            }
        }
    });
}
