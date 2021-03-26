var btn = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var newPrice = document.getElementById("price");
var discount = document.getElementById("coupon");

var coupons = ["GIANFRAN00", "TOPOLINOGAY899", "GIADOMASTICE6"];

// CLICK ON ADD
var addbtn = document.getElementsByClassName("ingredient-add");

for(var j = 0; j < addbtn.length; j++) {

    var add = addbtn[j];

    add.addEventListener("click", function(){

        var thisCheck = this.previousElementSibling;

        thisCheck.checked = !thisCheck.checked;
    });
}

// PRICE CALCULATOR
btn.addEventListener("click", function(){

    var name = burgerName.value.trim();

    if(name.length === 0) {
        alert("Please insert the burger name");
    } else {

        var price = 50;

        for(var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i];
            if(ingredient.checked) {
                price += parseInt(ingredient.value);
            }
        }
        console.log (price);

        
        var coupon = discount.value.toUpperCase();

        if (coupons.includes(coupon)) {
            price -= price * 0.20;
            alert("Discount 20% applied!");
        }
        
        newPrice.innerHTML = price.toFixed(2);
        console.log (price);
    }
});