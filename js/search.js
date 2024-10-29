const form = document.querySelector('form');

// console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const countryOfArrival = document.getElementById('countryOfArrival').value;
    const cityOfDeparture = document.getElementById('cityOfDeparture').value;
    const adultsAmount = document.getElementById('adults').value;
    const childAmount = document.getElementById('child').value;
    const priceFrom = document.getElementById('priceFrom').value;
    const priceTo = document.getElementById('priceTo').value;
    const transportFields = document.getElementsByName('transport');

    let selectedTransport
    for (i = 0; i < transportFields.length; i++) {
        const currentField = transportFields[i]
        if (currentField.checked) {
            selectedTransport = currentField.id
        }
    }

    const categoryFields = document.getElementsByName('categoryHotel');
    const selectedCategories = []
    for (i = 0; i < categoryFields.length; i++) {
        const currentField = categoryFields[i]
        if (currentField.checked) {
            selectedCategories.push(currentField.value)
        }
    }

    const nutritionFields = document.getElementsByName('nutrition');
    const selectedNutrition = []
    for (i = 0; i < nutritionFields.length; i++) {
        const currentField = nutritionFields[i]
        if (currentField.checked) {
            selectedNutrition.push(currentField.value)
        }
    }

    const formAnswers = {
        countryOfArrival,
        cityOfDeparture,
        adultsAmount,
        childAmount,
        price: [priceFrom, priceTo],
        selectedTransport,
        selectedCategories,
        selectedNutrition
    }

    alert(JSON.stringify(formAnswers));

    window.location.href = '../index.html#region-europe'
})

