function kalkulacja(){ 
    var number = document.getElementById("liczba").value;

    if (parseFloat(number) == parseInt(number)) {
        document.getElementById("wynik_1").innerHTML = "<h2>Liczba całkowita</h2>";
        document.getElementById("wynik_2").innerHTML = "<h2>Liczba całkowita</h2>";
        document.getElementById("wynik_3").innerHTML = "<h2>Liczba całkowita</h2>";
        document.getElementById("wynik_4").innerHTML = "<h2>Liczba całkowita</h2>";
    }
    else{
        document.getElementById("wynik_1").innerHTML = "<h2>Zaokrąglenie do góry</h2>" + Math.ceil(number);
        document.getElementById("wynik_2").innerHTML = "<h2>Zaokrąglenie do dołu</h2>" + Math.floor(number);
        document.getElementById("wynik_3").innerHTML = "<h2>Zaokrąglenie zwykłe</h2>" + Math.round(number);
        document.getElementById("wynik_4").innerHTML = "<h2>Usuwanie czesci ułamkowej</h2>" + Math.trunc(number);
    }

   
}
