const price = document.querySelector('.precio-inicial')
const quantity = document.querySelector('.cantidad')
let total = document.querySelector('.valor-total')
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')


// Price empty state
const basePrice = 400000
price.innerHTML = basePrice

// Quantity empty state
let sellQuantity = 0
quantity.innerHTML = sellQuantity


add.addEventListener('click', () => {
    quantity.innerHTML = Number(quantity.innerHTML) + 1
    let total = document.querySelector('.valor-total')
    total.innerHTML = Number(quantity.innerHTML) * basePrice
})


minus.addEventListener('click', () => {
    quantity.innerHTML = Number(quantity.innerHTML) - 1
    total = document.querySelector('.valor-total')
    total.innerHTML = Number(quantity.innerHTML) * basePrice
})
