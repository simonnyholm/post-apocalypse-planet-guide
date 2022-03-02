import getPlanet from "./getPlanet.js"

let queries = new URLSearchParams(window.location.search)

let sphere = queries.get("sphere")

if (!sphere){
    window.location.href = "/404.html"
} else {
    getPlanet(sphere)
}