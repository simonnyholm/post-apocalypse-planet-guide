import planetList from "./planetList.js"

let pageLinks = document.getElementsByClassName("pageLinks")[0]

console.log(pageLinks)

var prev = document.getElementsByClassName("prev")[0]
var next = document.getElementsByClassName("next")[0]

const limit = 10;

var queries = new URLSearchParams(window.location.search)

var currentPage = parseInt(queries.get("page")) || 1

var apiPage = currentPage

console.log(apiPage)

function getAllPlanets(){
fetch ("https://swapi.dev/api/planets?page="+apiPage)
        .then(function(response){
            if (response.status !== 200){
                document.querySelector(".planets").innerHTML = `
                <article>
                    <h1>Planet error</h1>
                    <p>Universe is broken. Sorry! Please return in another dimension.</p>
                </article>
                `
                return []
            }
            return response.json()
        })
        .then (function(data){
            planetList(data.results)

            const pages = Math.ceil(data.count / limit)

            /*
            var i = 1

            while(i <= pages) {

                let link = `<a href="?page=${i}">${i}</a>`
                pageLinks.innerHTML += link
                i++
            }
            */

            prev.href = `?page=${currentPage - 1}`
            next.href = `?page=${currentPage + 1}`

            if (currentPage >= pages){
                currentPage = pages
            }

            if (currentPage <= 1){
                currentPage = 1
            }

            console.log(data.next);
            console.log(pages, currentPage)


        })
}

// document.querySelector(".next").addEventListener("click", function(){
//     paging = paging+1;
//     getAllPlanets();
//     console.log(paging);
// }
export default getAllPlanets