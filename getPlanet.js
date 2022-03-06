function getPlanet(id){
    fetch("https://swapi.dev/api/planets/" + id)
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
            //let planet = data.results.find(element => element.name === sphere)


            console.log(data);

            
            /* if (!planet){
                window.location.href = "/404.html"
                return
            } */

            document.title += " - " + data.name
            let output = `
            <article class="planetArticle>
                <section class="planetWelcomeSection">
                    
                        <h1 class="planetH1">${data.name}</h1>
                        <p class="planetP">We welcome you to the ${data.climate} planet known among Earthlings by the name of ${data.name}.</p>
                    
                </section>

                <section class="planetNatureSection ${data.climate}">
                    <h2 class="planetH2">Nature</h2>
                    <div class="flexDiv">
                        <p class="planetP">${data.name} is famous for its glorius landscapes with features of ${data.terrain} and numerous possibilities of great endavours and misfortunes.</p>
                        <p class="planetP">About ${data.surface_water} percent of ${data.name}'s surface is covered with water, so dress accordingly.</p>
                    </div>
                </section>

                <section class="planetPhysicsSection ${data.terrain}">
                    <h2 class="planetH2">Physics</h2>
                    <div class="flexDiv">
                        <p class="planetP">On ${data.name}, a day is completed within ${data.rotation_period} full Earthling hours, and a year consists of ${data.orbital_period} Earth days.</p>
                        <p class="planetP"> ${data.name} has a diameter of ${data.diameter} earth miles, and the planet's gravitation is ${data.gravity} GrU, compared with Earth's 1 GrU.</p>
                    </div>
                </section>

                <section class="planetNativeSection ${data.climate}">
                    <h2 class="planetH2">Native population</h2>
                    <p class="planetP"> The number of ${data.name}ians currently living on ${data.name} is ${data.population}.</p>
                </section>

                <section class="planetPerspectiveSection ${data.terrain}">
                    <h2 class="planetH2">Perspective</h2>
                    <div class="flexDiv">
                        <p class="planetP"> Note that ${data.name} is a fictional planet, hence any form of colonization or even a weekend trip is a mere burp of hopeful imagination.</p>
                        <p class="planetP">So good luck being stuck on desolate earth, suckers!</p>
                    </div>
                </section>
               


            </article>
            `

            document.querySelector(".planet").innerHTML += output
        })
    

        
}

export default getPlanet