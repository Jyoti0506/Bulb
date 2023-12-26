const button = document.getElementById('buttonOn')
const bulb = document.getElementById('bulb-off')
const icon = document.getElementById('icon')
var isBulbOn = false;
   function turnon() {
    isBulbOn = !isBulbOn; // true
    console.log(isBulbOn);
    if (isBulbOn) {
        bulb.style.backgroundColor = "orange";
        bulb.style.boxShadow = " 0px 10px 25px #daa505, 0px 10px 60px #daa505, 0px 10px 80px #daa505, 0px 10px 200px #daa505, inset 10px 0px 40px #f6c513, inset 20px 0px 60px #daa505"
        icon.style.color = "yellow"
    } else {
        bulb.style.backgroundColor = "gray";
        icon.style.color = "#000"
        bulb.style.boxShadow = "inset 10px 0px 20px #000, inset 10px 0px 40px #000, inset 20px 0px 60px #000"
    }
   }