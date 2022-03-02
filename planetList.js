function planetList(planets){

    let next = planets;
    console.log(next);
    // document.querySelector("#paging").innerHTML += output

    planets.forEach(function(planet){
    let output = `
        <article class="article planetListArticle" onclick="window.location.href='/planet.html?sphere=${planet.name}'" >
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