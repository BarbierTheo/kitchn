let id = '3166352968591'

fetch(`https://world.openfoodfacts.org/api/v3/product/${id}.json`)
.then((response) => response.json())
.then(data => {
    // console.log(data)
    // console.log(data.product.product_name_fr)
    // console.log(data.product.brands)
    // console.log(data.product.product_quantity)
    // console.log(data.product.product_quantity_unit)
    // console.log(data.product.ingredients_text_with_allergens_fr)
    // console.log(data.product.allergens_imported)
    // console.log(data.product.nutriscore_grade)
    // console.log(data.product.nova_group)
    // console.log(data.product.categories)
    console.log(data.product.origin_fr)

    data.product.origin_fr ==! "" ? origin_fr = `<p><span class="font-semibold">D'origine :</span> ${data.product.origin_fr}</p>` : origin_fr = ''


    document.getElementById('interface').innerHTML = `
            <div class="self-center m-8"><img src="${data.product.image_front_url}" alt="${data.product.product_name_fr} ${data.product.brands}" class=""></div>
            <div class="flex lg:flex-row flex-col justify-center lg:justify-between m-8 gap-8 xl:w-full">

                <div class="flex flex-col text-slate-700 justify-between lg:w-9/12">
                    <div>
                        <p class="text-2xl"><span class="font-bold">${data.product.product_name_fr}</span> - ${data.product.brands} - <span
                                class="font-light italic">${data.product.product_quantity} ${data.product.product_quantity_unit}</span></p>
                        <p><span class="font-semibold">Catégories :</span> ${data.product.categories}</p>
                        <p><span class="font-semibold">Ingrédients :</span> ${data.product.ingredients_text_fr}</p>
                    </div>
                    <div>
                      ${origin_fr}
                        <p><span class="font-semibold">Présence d'allergènes</span> (${data.product.allergens_imported})
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 lg:my-4 self-center lg:self-start">
                    <div class="flex py-4 px-10 bg-green-500 text-slate-50 font-bold text-2xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>
                    <div class="flex self-center">
                        <p class="text-slate-800 font-bold text-2xl py-4 px-10">NOVA : <span
                                class="ml-2 py-4 px-6 bg-green-500 text-slate-50 rounded-xl">${data.product.nova_group}</span></p>
                    </div>
                </div>
            </div>
    `









})