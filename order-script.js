let urlParams = new URLSearchParams(window.location.search);
let selectedItem = urlParams.get("item");
let selectedPrice = urlParams.get("price");

if (selectedItem) {
    document.getElementById("selected-item").value = selectedItem;
    document.getElementById("total-price").value = selectedPrice;
}

// قیمت کا ڈیٹا
let itemPrices = {
    "Pizza": 800,
    "Burger": 400,
    "Pasta": 300,
    "Sandwich": 200,
    "Salad": 150,
    "Fries": 250,
    "Chicken Roll": 250,
    "Chicken Brost": 300,
    "Pancake": 700
};

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    
    if (name === "" || address === "" || phone === "") {
        alert("Please fill out all fields before submitting your order.");
    } else {
        alert("Thank you, " + name + "! Your order has been placed successfully.");
        document.getElementById("orderForm").reset();
    }
});

document.getElementById("quantity").addEventListener("input", function() {
    let quantity = this.value;
    let totalPriceField = document.getElementById("total-price");
    
    if (quantity < 1 || quantity > 10) {
        this.value = "";
        this.placeholder = "Quantity must be between 1 and 10";
        totalPriceField.value = "";
    } else if (quantity === "") {
        totalPriceField.value = "";
    } else {
        updateTotalPrice();
    }
});

function updateTotalPrice() {
    let selectedItem = document.getElementById("selected-item").value;
    let quantity = document.getElementById("quantity").value || 1;
    let totalPriceField = document.getElementById("total-price");
    
    if (quantity === "") {
        totalPriceField.value = "";
    } else if (itemPrices[selectedItem]) {
        totalPriceField.value = itemPrices[selectedItem] * quantity;
    } else {
        totalPriceField.value = "";
        totalPriceField.placeholder = "Price not available";
    }
}

document.querySelectorAll('input[name="payment-method"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        document.getElementById('jazzcash-number').style.display = (this.value === 'jazzcash') ? 'block' : 'none';
        document.getElementById('easypaisa-number').style.display = (this.value === 'easypaisa') ? 'block' : 'none';
    });
});



