/* ==========================================
   DIGITAL MARKETPLACE
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. SELECT ELEMENTS

    const searchInput = document.querySelector(
        "#searchInput, .hero-search input, .search-box input"
    );

    const searchButton = document.querySelector(
        "#searchButton, .hero-search button"
    );

    const productCards = document.querySelectorAll(
        ".product-card, .listing-card"
    );

    const favoriteButtons = document.querySelectorAll(
        ".favorite-btn"
    );

    const backToTop = document.querySelector(
        ".back-to-top"
    );


    // 2. NOTIFICATION SYSTEM

    function showNotification(message, type = "success") {

        let notification = document.querySelector(
            ".marketplace-notification"
        );

        if (!notification) {

            notification = document.createElement("div");

            notification.className =
                "marketplace-notification";

            document.body.appendChild(notification);
        }

        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 99999;
            padding: 14px 22px;
            border-radius: 10px;
            color: white;
            font-size: 14px;
            font-weight: 600;
            background: ${
                type === "error" ? "#ef4444" : "#16a34a"
            };
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
            animation: notificationIn 0.3s ease;
        `;

        clearTimeout(notification.timer);

        notification.timer = setTimeout(() => {
            notification.remove();
        }, 3000);
    }


    // 3. ADD NOTIFICATION ANIMATION

    const animationStyle = document.createElement("style");

    animationStyle.textContent = `
        @keyframes notificationIn {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;

    document.head.appendChild(animationStyle);


    // 4. LIVE SEARCH

    function searchProducts() {

        if (!searchInput) return;

        const searchValue = searchInput.value
            .toLowerCase()
            .trim();

        let visibleCount = 0;

        productCards.forEach(card => {

            const cardText = card.textContent.toLowerCase();

            const matches = cardText.includes(searchValue);

            card.style.display = matches ? "" : "none";

            if (matches) {
                visibleCount++;
            }
        });

        updateNoResults(visibleCount, searchValue);
    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchProducts
        );
    }


    if (searchButton) {

        searchButton.addEventListener("click", function (event) {

            event.preventDefault();

            searchProducts();

            const listingsSection = document.querySelector(
                "#latest-listings, #listings, .latest-listings"
            );

            if (listingsSection) {
                listingsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // 5. NO RESULTS MESSAGE

    function updateNoResults(count, searchValue) {

        const listingsContainer = document.querySelector(
            "#latest-listings .row, #listings .row, .latest-listings .row"
        );

        if (!listingsContainer) return;

        let message = document.querySelector(
            ".no-results-message"
        );

        if (count === 0 && searchValue !== "") {

            if (!message) {

                message = document.createElement("div");

                message.className =
                    "no-results-message col-12 text-center py-5";

                message.innerHTML = `
                    <h4>No Listings Found</h4>
                    <p class="text-muted">
                        Try another keyword or search term.
                    </p>
                `;

                listingsContainer.appendChild(message);
            }

        } else if (message) {

            message.remove();
        }
    }


    // 6. FAVORITE / WISHLIST BUTTONS

    favoriteButtons.forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            this.classList.toggle("active");

            const isFavorite =
                this.classList.contains("active");

            const icon = this.querySelector("i");

            if (icon) {

                icon.classList.toggle(
                    "bi-heart",
                    !isFavorite
                );

                icon.classList.toggle(
                    "bi-heart-fill",
                    isFavorite
                );
            }

            showNotification(
                isFavorite
                    ? "Added to favorites!"
                    : "Removed from favorites!"
            );
        });
    });


    // 7. CATEGORY FILTERING

    const categoryButtons = document.querySelectorAll(
        "[data-category]"
    );

    categoryButtons.forEach(button => {

        button.addEventListener("click", function (event) {

            const selectedCategory =
                this.dataset.category.toLowerCase();

            productCards.forEach(card => {

                const cardCategory = (
                    card.dataset.category ||
                    card.textContent
                ).toLowerCase();

                const matches =
                    selectedCategory === "all" ||
                    cardCategory.includes(selectedCategory);

                card.style.display = matches ? "" : "none";
            });

            const listingsSection = document.querySelector(
                "#latest-listings, #listings, .latest-listings"
            );

            if (listingsSection) {
                listingsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // 8. SORT PRODUCTS BY PRICE

    const sortSelect = document.querySelector(
        "#sortListings, #sortSelect"
    );

    if (sortSelect) {

        sortSelect.addEventListener("change", function () {

            const container = document.querySelector(
                "#latest-listings .row, #listings .row, .latest-listings .row"
            );

            if (!container) return;

            const cards = Array.from(
                container.querySelectorAll(
                    ".product-card, .listing-card"
                )
            );

            cards.sort((a, b) => {

                const priceA = getPrice(a);
                const priceB = getPrice(b);

                if (this.value === "low-to-high") {
                    return priceA - priceB;
                }

                if (this.value === "high-to-low") {
                    return priceB - priceA;
                }

                return 0;
            });

            cards.forEach(card => {
                container.appendChild(card);
            });
        });
    }


    function getPrice(card) {

        const priceElement = card.querySelector(
            ".product-price, .listing-price"
        );

        if (!priceElement) return 0;

        const price = priceElement.textContent.replace(
            /[^0-9.]/g,
            ""
        );

        return Number(price) || 0;
    }


    // 9. BACK TO TOP BUTTON

    if (backToTop) {

        backToTop.style.display = "none";

        window.addEventListener("scroll", function () {

            backToTop.style.display =
                window.scrollY > 400 ? "flex" : "none";
        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 10. SMOOTH SCROLLING

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // 11. SELLER / BUYER BUTTONS

    document.querySelectorAll(
        ".seller-register-btn, .buyer-register-btn"
    ).forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            showNotification(
                "Account registration will be available soon."
            );
        });
    });


    // 12. CONTACT SELLER BUTTONS

    document.querySelectorAll(
        ".contact-seller-btn"
    ).forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            showNotification(
                "Seller contact feature will be connected soon."
            );
        });
    });


    // 13. ADD LISTING BUTTON

    document.querySelectorAll(
        ".add-listing-btn"
    ).forEach(button => {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            showNotification(
                "Please register as a seller to add listings."
            );
        });
    });


    // 14. NAVBAR AUTO CLOSE ON MOBILE

    const navLinks = document.querySelectorAll(
        ".navbar .nav-link"
    );

    const navbarCollapse = document.querySelector(
        ".navbar-collapse"
    );

    navLinks.forEach(link => {

        link.addEventListener("click", function () {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show") &&
                window.bootstrap
            ) {

                const collapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        navbarCollapse
                    );

                collapse.hide();
            }
        });
    });


    // 15. DYNAMIC CURRENT YEAR

    const yearElements = document.querySelectorAll(
        "#currentYear, .current-year"
    );

    yearElements.forEach(element => {

        element.textContent = new Date().getFullYear();
    });


    // 16. PASSWORD SHOW / HIDE

    document.querySelectorAll(
        ".password-toggle"
    ).forEach(button => {

        button.addEventListener("click", function () {

            const input = document.querySelector(
                this.dataset.target
            );

            if (!input) return;

            input.type =
                input.type === "password"
                    ? "text"
                    : "password";
        });
    });


    // 17. PREVENT EMPTY FORM SUBMISSION

    document.querySelectorAll("form").forEach(form => {

        form.addEventListener("submit", function (event) {

            const requiredFields = this.querySelectorAll(
                "[required]"
            );

            let isValid = true;

            requiredFields.forEach(field => {

                if (!field.value.trim()) {

                    isValid = false;

                    field.classList.add("is-invalid");

                } else {

                    field.classList.remove("is-invalid");
                }
            });

            if (!isValid) {

                event.preventDefault();

                showNotification(
                    "Please complete all required fields.",
                    "error"
                );
            }
        });
    });


    // 18. REMOVE INVALID STATE WHILE TYPING

    document.querySelectorAll(
        "input, textarea, select"
    ).forEach(field => {

        field.addEventListener("input", function () {

            if (this.value.trim()) {
                this.classList.remove("is-invalid");
            }
        });
    });


    // 19. INITIALIZATION MESSAGE

    console.log(
        "Digital Marketplace Frontend Initialized Successfully!"
    );

});
