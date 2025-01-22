// Récupération des paramètres contenus dans l'URL 

let params = new URLSearchParams(document.location.search);
let id = params.get("id")

if (id==null){
document.getElementById('hero').innerHTML = `<div class="lg:w-3/12 w-96 self-center">
            <img src="./assets/img/cozy-kitchen-interior-sweet-home-card-cosy-dining-table-with-cup-coffee-machine-fir-branch-winter-window-hygge-scandinavian-comfy-house-modern-trendy-apartment-flat-vector-illustration_198278-22579.avif"
                alt="" class="">
        </div>
        <div class="flex flex-col self-center w-10/12 lg:w-4/12 gap-6 text-center lg:text-left">
            <h1 class="text-slate-900 text-3xl font-semibold ">Mieux choisir, c'est déjà mieux manger</h1>
            <p class="text-slate-700">Envie de savoir ce que contiennent vraiment vos aliments ? Notre application vous
                permet de scanner facilement le code-barres de vos produits alimentaires et d'obtenir des informations
                claires et précises sur leur composition. Faites des choix éclairés pour une alimentation plus saine !
            </p>
            <form action="" class="self-center">
                <input type="text" name="id" placeholder="ex. Carotte" class="input bg-amber-100 lg:w-96" />
                <button class="py-3 px-4 bg-amber-400 rounded-lg"><i
                        class='bx bxs-search text-amber-50 text-xl'></i></button>
            </form>
        </div>`
} else {
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
            nutriscore = `<img src="./assets/img/Nutriscore/A.svg" alt="" class="w-32 self-center">`
        }
        if (data.product.nutriscore_grade == "b") {
            nutriscore = `<img src="./assets/img/Nutriscore/B.svg" alt="" class="w-32 self-center">`
        }
        if (data.product.nutriscore_grade == "c") {
            nutriscore = `<img src="./assets/img/Nutriscore/C.svg" alt="" class="w-32 self-center">`
        }
        if (data.product.nutriscore_grade == "d") {
             nutriscore = `<img src="./assets/img/Nutriscore/D.svg" alt="" class="w-32 self-center">`
        }
        if (data.product.nutriscore_grade == "e") {
            nutriscore = `<img src="./assets/img/Nutriscore/E.svg" alt="" class="w-32 self-center">`
        }

        // NOVA
        if (data.product.nova_group == 1) {
            nova = `<img src="./assets/img/Novascore/Nova1.svg" alt="" class="h-32 self-center">`
        }
        if (data.product.nova_group == 2) {
            nova = `<img src="./assets/img/Novascore/Nova2.svg" alt="" class="h-32 self-center">`
        }
        if (data.product.nova_group == 3) {
            nova = `<img src="./assets/img/Novascore/Nova3.svg" alt="" class="h-32 self-center">`
        }
        if (data.product.nova_group == 4) {
            nova = `<img src="./assets/img/Novascore/Nova4.svg" alt="" class="h-32 self-center">`
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
                <div class="flex flex-row lg:flex-col gap-4 lg:my-4 self-center lg:self-start min-w-64">
                    ${nutriscore}
                    ${nova}
                </div>
            </div>
    `
    })
}