function prosesAngka() {
    const angkaInput = document.getElementById("angka");
    const divHasil = document.getElementById("hasil");
    const divMassage = document.createElement("p");

    if (isNaN (angkaInput.value)){
        divMassage.innerHTML = "Invalid Input";
        divMassage.style.color = "red";
    } else {
        if(angkaInput.value == 0){
            divMassage.innerHTML = "Invalid Input";
            divMassage.style.color = "red";
        } else if (angkaInput.value % 3 === 0 && angkaInput.value % 5 ===0){
            divMassage.innerHTML = "FizzBuzz!";
        } else if (angkaInput.value % 3 === 0){
            divMassage.innerHTML = "Fizz!";
        } else if (angkaInput.value % 5 ===0){
            divMassage.innerHTML = "Buzz!";
        } else {
            divMassage.innerHTML = angkaInput.value;
        }
    }
    divHasil.append(divMassage);
}