let example = '737628064502'

fetch(`https://world.openfoodfacts.org/api/v3/product/${example}.json`)
.then((response) => response.json())
.then(data => {
    console.log(data)






})