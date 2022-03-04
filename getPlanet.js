function getPlanet(apiPlanetID){
    fetch("https://swapi.dev/api/planets/")
        .then(function(response){
            if (response.status !== 200){
                document.querySelector(".planet").innerHTML = `
                <article class="planetArticle">
                    <h1 class="planetH1">Planetary malfunction</h1>
                    <p>The sphere that you selected is currently out of its regular orbit. Return in another time-space continuum</p>
                </article>
                `
                return []
            }
            return response.json()
        })
        .then(function(data){
            

            //let planet = data.results.find(element => element.url === apiPlanetID)
            let planet = data.results.find(element => element.name === sphere)




            
            if (!planet){
                window.location.href = "/404.html"
                return
            }

            document.title += " - " + planet.name
            let output = `
            <article class="planetArticle>
                <section class="planetWelcomeSection">
                    
                        <h1 class="planetH1">${planet.name}</h1>
                        <p class="planetP">We welcome you to the ${planet.climate} planet known among Earthlings by the name of ${planet.name}.</p>
                    
                </section>

                <section class="planetNatureSection">
                    <h2 class="planetH2">Nature</h2>
                    <div class="flexDiv">
                        <p class="planetP">${planet.name} is famous for its glorius landscapes with features of ${planet.terrain} and numerous possibilities of great endavours and misfortunes.</p>
                        <p class="planetP">About ${planet.surface_water} percent of ${planet.name}'s surface is covered with water, so dress accordingly.</p>
                    </div>
                </section>

                <section class="planetPhysicsSection">
                    <h2 class="planetH2">Physics</h2>
                    <div class="flexDiv">
                        <p class="planetP">On ${planet.name}, a day is completed within ${planet.rotation_period} full Earthling hours, and a year consists of ${planet.orbital_period} Earth days.</p>
                        <p class="planetP"> ${planet.name} has a diameter of ${planet.diameter} earth miles, and the planet's gravitation is ${planet.gravity} GrU, compared with Earth's 1 GrU.</p>
                    </div>
                </section>

                <section class="planetNativeSection">
                    <h2 class="planetH2">Native population</h2>
                    <p class="planetP"> The number of ${planet.name}ians currently living on ${planet.name} is ${planet.population}.</p>
                </section>

                <section class="planetPerspectiveSection">
                    <h2 class="planetH2">Perspective</h2>
                    <div class="flexDiv">
                        <p class="planetP"> Note that ${planet.name} is a fictional planet, hence any form of colonization or even a weekend trip is a mere burp of hopeful imagination.</p>
                        <p class="planetP">So good luck being stuck on desolate earth, suckers!</p>
                    </div>
                </section>
               


            </article>
            `

            document.querySelector(".planet").innerHTML += output
        })
    

        
}

export default getPlanet