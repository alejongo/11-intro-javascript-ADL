const price = document.querySelector('.precio-inicial')
const quantity = document.querySelector('.cantidad')
const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const total = document.querySelector('p .valor-total')

// Price definition
const basePrice = 400000
price.innerHTML = basePrice

// Quantity definition
const sellQuantity = 0
quantity.innerHTML = sellQuantity

// Total
const totalCharge = quantity.innerHTML * price.innerHTML
total.innerHTML = totalCharge


