function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 document.querySelectorAll('.order-now').forEach(button => {
    button.addEventListener('click', function() {
        let itemName = this.getAttribute('data-item-name'); 
        localStorage.setItem('selectedItem', itemName); // آئٹم اسٹور کریں
        let formUrl = `order.html?item=${encodeURIComponent(itemName)}`;
        window.open(formUrl, '_blank');
    });
});







document.querySelectorAll(".order-now").forEach(button => {
    button.addEventListener("click", function () {
        let itemName = this.getAttribute("data-item-name");
        let itemPrice = this.getAttribute("data-price");
        let orderUrl = `order.html?item=${encodeURIComponent(itemName)}&price=${itemPrice}`;
        window.open(orderUrl, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];

    function updateFavoriteUI() {
        let list = document.getElementById("favorite-list");
        if (!list) return; // ✅ اگر یہ Favorite Page پر نہیں ہے تو کچھ نہ کریں
        list.innerHTML = "";

        favoriteList.forEach(itemHTML => {
            let div = document.createElement("div");
            div.innerHTML = itemHTML;
            
            // ✅ Favorite بٹن Remove کریں Favorite List سے
            let favButton = div.querySelector(".favorite");
            if (favButton) {
                favButton.remove();
            }

            // ✅ Order Now بٹن کا ایونٹ دوبارہ لگائیں
            let orderBtn = div.querySelector(".order-now");
            if (orderBtn) {
                orderBtn.addEventListener("click", function () {
                    let itemName = this.getAttribute("data-item-name");
                    localStorage.setItem("selectedItem", itemName);
                    window.open(`order.html?item=${encodeURIComponent(itemName)}`, '_blank');
                });
            }

            list.appendChild(div);
        });
    }

    function updateFavoriteButtons() {
        document.querySelectorAll('.favorite').forEach(button => {
            let itemName = button.getAttribute('data-item-name');
            if (favoriteList.some(item => item.includes(`data-item-name="${itemName}"`))) {
                button.innerHTML = "❤️"; // ✅ اگر Favorite ہے تو لال
            } else {
                button.innerHTML = "🤍"; // ✅ اگر Favorite نہیں ہے تو سفید
            }
        });
    }

    document.querySelectorAll('.favorite').forEach(button => {
        button.addEventListener('click', function () {
            let menuItem = this.closest(".menu-item").outerHTML;
            let itemName = this.getAttribute("data-item-name");

            if (favoriteList.some(item => item.includes(`data-item-name="${itemName}"`))) {
                favoriteList = favoriteList.filter(item => !item.includes(`data-item-name="${itemName}"`));
            } else {
                favoriteList.push(menuItem);
            }

            localStorage.setItem("favorites", JSON.stringify(favoriteList));
            updateFavoriteUI();
            updateFavoriteButtons(); // ✅ بٹن کا رنگ اپڈیٹ کریں
        });
    });

    updateFavoriteUI();
    updateFavoriteButtons(); // ✅ Page Load ہوتے ہی بٹن کو صحیح کریں
});


// localStorage.removeItem("favorites");

function toggleMenu() {
    let menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("show");

    // Menu close karne ka automatic feature jab koi aur click kare
    window.onclick = function(e) {
        if (!menu.contains(e.target) && !document.querySelector(".hamburger").contains(e.target)) {
            menu.classList.remove("show");
        }
    };
}


