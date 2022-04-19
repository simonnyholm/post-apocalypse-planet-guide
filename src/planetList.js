

function planetList(planets){

    //let next = planets;
    //console.log(next);
    // document.querySelector("#paging").innerHTML += output

    planets.forEach(function(planet){
    
    
        let planetURL = planet.url
    
        let splitPlanetPath = planetURL.split('/');
        
        let apiPlanetID = splitPlanetPath[5]

        console.log(apiPlanetID);

        //skal det ovenstående ikke ud i det globale scope for at virke udenfor functionen?

        let output = `
        

        <article class="article planetListArticle ${planet.climate}" onclick="window.location.href='/planet.html?id=${apiPlanetID}'" >
            <h1 class="planetListheadline1">${planet.name}</h1>
            <div class="flexDiv">
                <p class="planetListWelcomeP">Welcome to the ${planet.climate} planet of ${planet.name}.</p> 
                <p class="planetListLandscapeP">Here, the landscape is dominated by ${planet.terrain} and such.</p>
            </div>
        </article>

    
    `
    document.querySelector(".planets").innerHTML += output
    })
}



export default planetList

// Classname til article(skal rettes til): class="article planetArticle" onclick="window.location.href='/planet.html?sphere=${planet.name}'"