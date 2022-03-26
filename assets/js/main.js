document.getElementById("genera").addEventListener("click", display_information);

function display_information (){
    //mostra ticket 
    const show_your_ticket = document.querySelector(".your_ticket")
    show_your_ticket.classList.add("show_ticket")
    // nome
    let user_name = document.getElementById("my_name").value;
    document.getElementById("show_name").innerHTML = user_name;
    // età
    let my_age = document.getElementById("select_age").value;
    
    if (my_age == "minorenne" || my_age== "anziano"){
        document.getElementById("sconto").innerHTML = `Sconto ${my_age}`
    } else {
        document.getElementById("sconto").innerHTML = `Prezzo intero ${my_age}`
    }
    // carrozza
    document.getElementById("numero_carrozza").innerHTML = Math.floor(Math.random()*10 + 1);
    // codice CP
    document.getElementById("codice_cp").innerHTML = Math.floor(Math.random()*10000);
    //prezzo al km
    let dist_km = document.getElementById("my_km").value;
    console.log(dist_km)
    
    let full_price = dist_km * 0.21
    // sconto
    if(my_age == "minorenne"){
        full_price = full_price - full_price * 0.2;
    } else if (my_age == "anziano"){
        full_price = full_price - full_price * 0.4;
    }
    document.getElementById("prezzo").innerHTML = full_price.toFixed(2)
}

document.getElementById("annulla").addEventListener("click", annulla)
function annulla (){
    const show_your_ticket = document.querySelector(".your_ticket")
    show_your_ticket.classList.remove("show_ticket")
}

