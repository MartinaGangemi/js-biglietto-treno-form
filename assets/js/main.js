document.getElementById("genera").addEventListener("click", display_information);

function display_information (){
    // nome
    let user_name = document.getElementById("my_name").value;
    document.getElementById("show_name").innerHTML = user_name;
    // età
    let my_age = document.getElementById("select_age").value;
    document.getElementById("sconto").innerHTML = my_age;
    // carrozza
    document.getElementById("numero_carrozza").innerHTML = Math.floor(Math.random()*10);
    // codice CP
    document.getElementById("codice_cp").innerHTML = Math.floor(Math.random()*10000);
    //km
    let dist_km = document.getElementById("my_km").value;
    console.log(dist_km)
    
    let full_price = dist_km * 0.21
    
    if(my_age == "minorenne"){
        full_price = full_price - full_price * 0.2;
    } else if (my_age == "anziano"){
        full_price = full_price - full_price * 0.4;
    }
    document.getElementById("prezzo").innerHTML = full_price.toFixed(2)

}


