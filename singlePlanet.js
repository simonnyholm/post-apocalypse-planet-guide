import getPlanet from "./getPlanet.js"

let queries = new URLSearchParams(window.location.search)

let id = queries.get("id")
console.log(id);

if (!id){
    window.location.href = "/404.html"
} else {
    getPlanet(id)
}