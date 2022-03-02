import planetList from "./planetList.js"



function getAllPlanets(paging){
    fetch ("https://swapi.dev/api/planets?page="+paging)
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

            console.log(data.next);
            console.log(planetList)
        })
}

// document.querySelector(".next").addEventListener("click", function(){
//     paging = paging+1;
//     getAllPlanets();
//     console.log(paging);
// }
export default getAllPlanets