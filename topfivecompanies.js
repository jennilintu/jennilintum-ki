let showCompany = function(company) {
    let container = document.createElement("div");
    container.className = "container";
    container.style.padding = "5px";
    container.style.backgroundColor = "white";
    container.style.height = (company.sales*6) + "px";
    container.style.width = "120px";
    container.style.margin = "30px";
    
    let heading = document.createElement("h1");
    heading.className = "heading";
    heading.innerHTML = company.name;
    heading.style.cursor = "pointer";
    heading.style.fontSize = "20px";
    heading.style.position = "absolute";
    heading.style.textAlign = "center";
    heading.style.bottom = "-25px"

    heading.onmouseenter = function(){
        let test = document.createElement("div");
        test.className = "info";
        test.style.display = "block";
        test.style.top = "40px";
        heading.appendChild(test);
        
        let infoText = document.createElement("p");
            if (company.name === "L'Oréal"){
                infoText.innerHTML = "L’Oreal is not a cruelty-free corporation as some of their brands are sold in Mainland China where animal testing is required by law for all imported cosmetics. However it should be noted that 5 of L’Oreal’s brands are PETA certified cruelty-free: Urban Decay, NYX Cosmetics, Pureology, IT Cosmetics, and Carol’s Daughter."
                
            }
            else if (company.name === "Unilever"){
                infoText.innerHTML = "Unilever is not a cruelty-free corporation because some of their ingredients are tested on animals. In addition, some of Unilever’s products are also tested on animals in China where animal testing is required by law for all imported cosmetics.<br>However it should be noted that 11 of Unilever’s brands are PETA certified cruelty-free: Dermalogica, Murad, REN, Shea Moisture, Seventh Generation, Schmidt’s Naturals, St. Ives, Simple, and Nubian Heritage.<br>And 3 of Unilever brands are Leaping Bunny certified cruelty-free: Dermalogica, Schmidt’s Naturals, and Seventh Generation."
                
            }
            else if (company.name === "Esteé Lauder"){
                infoText.innerHTML = "Estée Lauder is not a cruelty-free corporation as some of their brands are sold in Mainland China where animal testing is required by law for all imported cosmetics.<br>However it should be noted that 6 of Estée Lauder brands are PETA certified cruelty-free: Aveda, Becca Cosmetics, Bumble and Bumble, Le Labo, Smashbox, and Too Faced Cosmetics."
                
            }
            else if (company.name === "Coty"){
                infoText.innerHTML = "Coty is not a cruelty-free corporation, their products are tested on animals in China where animal testing is required for all imported cosmetics."
                
            }
            else {
                infoText.innerHTML = "Shiseido is not a cruelty-free brand or corporation. Some of their ingredients are tested on animals, as well as, some of their finished products are tested on animals in order to sell in China.<br>It should be noted that 2 of Shiseido brands are PETA certified cruelty-free: BareMinerals and Buxom.";
                
            }
    heading.onmouseleave = function(){
        test.style.display = "none";
    }
        infoText.className = "info";
        infoText.style.display = "inline-block";
        infoText.style.width = "260px"
        test.appendChild(infoText);
    }

    container.appendChild(heading);
    
    let message = document.createElement("h4");
    message.className = "message";
    message.innerHTML = company.sales; 
    message.style.textAlign = "center";
    
    container.appendChild(message);
    
    document.getElementById("chart").appendChild(container);
    }
    
    document.getElementById("chart").style.display = "flex";
    document.getElementById("chart").style.position = "relative";
    document.getElementById("chart").style.alignItems = "flex-end";
    document.getElementById("chart").style.marginLeft = "auto";
    document.getElementById("chart").style.marginRight = "auto";
    document.getElementById("chart").style.width = "70%";
    document.getElementById("chart").style.maxWidth = document.getElementById("box");

    let companys= [
        {
        name: "L'Oréal",
        sales: 29.4
        },
        {
        name: "Unilever",
        sales: 21.5
        },
        {
        name: "Esteé Lauder",
        sales: 12.8
        },
        {
        name: "Coty",
        sales: 9.2
        },
        {
        name: "Shiseido",
        sales: 8.8
        }
    ];
    
    for (let company of companys) {
        showCompany(company);
    }
    