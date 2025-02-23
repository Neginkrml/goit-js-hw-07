const categoriesUl = document.querySelector("#categories-ul");
const categoriesLi = document.querySelectorAll(".categories-li");

console.log(`Toplam Kategori Sayısı: ${categoriesLi.length}`)

categoriesLi.forEach((element) => {
    const categoryTitle = element.querySelector("h2").textContent
    const elementCount = element.querySelectorAll("ul li").length

    console.log(`Kategori: ${categoryTitle}`)
    console.log(`Öge sayısı: ${elementCount}`)
})