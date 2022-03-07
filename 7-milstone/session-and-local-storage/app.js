const displayStorageData = () => {
    const cart = getCart()
    for (let name in cart) {
        displayItem(name)
    }

};

const shoppingCart = () => {
    const nameInput = document.getElementById("shopping-name");
    const nameValue = nameInput.value;
    if (!nameValue) {
        return;
    }
    // displayItem 
    displayItem(nameValue);
    // add to session storage
    addProductToCart(nameValue)
    nameInput.value = '';

}

const displayItem = (item) => {
    const itemUl = document.getElementById('item-Ul');
    const itemLi = document.createElement("li");
    itemLi.innerText = item
    itemUl.appendChild(itemLi)

}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart)
    }
    else {
        cartObject = {};
    }
    return cartObject
}
const addProductToCart = (name) => {
    const cart = getCart(name);
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

}
displayStorageData() 
