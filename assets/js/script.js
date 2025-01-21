// Récupération des paramètres contenus dans l'URL 

let params = new URLSearchParams(document.location.search);
let id = params.get("id")



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
        console.log(data.product.nova_group)
        // console.log(data.product.categories)
        // console.log(data.product.allergens_imported)

        data.product.origin_fr !== "" && data.product.origin_fr !== undefined ? origin_fr = `<p><span class="font-semibold">D'origine :</span> ${data.product.origin_fr}</p>` : origin_fr = ''
        data.product.allergens_imported !== "" && data.product.allergens_imported !== undefined ? allergens_imported = `<p><span class="font-semibold">Présence d'allergènes </span>(${data.product.allergens_imported})</p>` : allergens_imported = ''



        // NUTRISCORE
        if (data.product.nutriscore_grade == "a") {
            nutriscore = `<div class="flex py-3 px-6 self-center bg-[#00823f] text-slate-50 font-bold text-xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>`
        }
        if (data.product.nutriscore_grade == "b") {
            nutriscore = `<div class="flex py-3 px-6 self-center bg-[#86bc2b] text-slate-50 font-bold text-xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>`
        }
        if (data.product.nutriscore_grade == "c") {
            nutriscore = `<div class="flex py-3 px-6 self-center bg-[#fecc00] text-white font-bold text-xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>`
        }
        if (data.product.nutriscore_grade == "d") {
            nutriscore = `<div class="flex py-3 px-6 self-center bg-[#ef8200] text-slate-50 font-bold text-xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>`
        }
        if (data.product.nutriscore_grade == "e") {
            nutriscore = `<div class="flex py-3 px-6 self-center bg-[#e73c08] text-slate-50 font-bold text-xl rounded-full shadow-sm capitalize">
                        NUTRISCORE : ${data.product.nutriscore_grade}
                    </div>`
        }

        // NOVA
        if (data.product.nova_group == 1) {
            nova = `<div class="flex self-center">
                    <p class="text-slate-800 font-bold text-2xl py-4 px-10">NOVA : <span
                            class="ml-2 py-2 px-4 bg-[#00aa00] text-slate-50 rounded-xl">${data.product.nova_group}</span></p>
                </div>`
        }
        if (data.product.nova_group == 2) {
            nova = `<div class="flex self-center">
                    <p class="text-slate-800 font-bold text-2xl py-4 px-10">NOVA : <span
                            class="ml-2 py-2 px-4 bg-[#ffcc00] text-slate-50 rounded-xl">${data.product.nova_group}</span></p>
                </div>`
        }
        if (data.product.nova_group == 3) {
            nova = `<div class="flex self-center">
                    <p class="text-slate-800 font-bold text-2xl py-4 px-10">NOVA : <span
                            class="ml-2 py-2 px-4 bg-[#ff6600] text-slate-50 rounded-xl">${data.product.nova_group}</span></p>
                </div>`
        }
        if (data.product.nova_group == 4) {
            nova = `<div class="flex self-center">
                    <p class="text-slate-800 font-bold text-2xl self-center">NOVA : <span
                            class="ml-2 py-2 px-4 bg-[#ff0000] text-slate-50 rounded-xl">${data.product.nova_group}</span></p>
                </div>`
        }






        document.getElementById('interface').innerHTML = `
            <div class="self-center m-8"><img src="${data.product.image_front_url}" alt="${data.product.product_name_fr} ${data.product.brands}" class="min-w-96"></div>
            <div class="flex lg:flex-row flex-col justify-center lg:justify-between m-8 gap-8 xl:w-full">

                <div class="flex flex-col text-slate-700 justify-between lg:w-9/12 gap-2">
                    <div class="flex flex-col gap-2">
                        <p class="text-2xl"><span class="font-bold">${data.product.product_name_fr}</span> - ${data.product.brands} - <span
                                class="font-light italic">${data.product.product_quantity} ${data.product.product_quantity_unit}</span></p>
                        <p><span class="font-semibold">Catégories :</span> ${data.product.categories}</p>
                        <p><span class="font-semibold">Ingrédients :</span> ${data.product.ingredients_text_fr}</p>
                    </div>
                    <div>
                    ${origin_fr}
                    ${allergens_imported}
                    </div>
                </div>
                <div class="flex flex-col gap-4 lg:my-4 self-center lg:self-start min-w-64">
                    ${nutriscore}
                    ${nova}
                </div>
            </div>
    `









    })