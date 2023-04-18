// ARRAYS
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// BOOLEANS
isDarkMode = true
isLightMode = false

// DOCUMENT ELEMENTS
password_one_element = document.getElementById("password-1")
password_two_element = document.getElementById("password-2")

title_1 = document.getElementById("first-line")

button_color_mode_text = document.getElementById("light_or_dark_mode")
button_color_mode_text.textContent = "Light Mode"



// FUNCTIONS
function generate_password() {
    password_one_element.textContent = random_password()
    password_two_element.textContent = random_password() 
}
    
    
function random_password () {
    length = 14
    password = ""
    for(let i = 0; i <= length; i++){
        random_char = Math.floor(Math.random()*characters.length) 
        password += characters[random_char]
    }
    return password
}


function change_color_mode() {
    if(isDarkMode === true) {
        isDarkMode = false
        isLightMode = true
        document.body.style.backgroundColor = "#ECFDF5";
        document.getElementById("first-line").style.color = "#2B283A";
        document.getElementById("title-p").style.color = "#7A7A7A";
        document.getElementById("light_or_dark_mode").style.backgroundColor = "#10B981";
        button_color_mode_text.textContent = "Dark Mode"
    } else if(isLightMode === true) {
        isLightMode = false
        isDarkMode = true
        document.body.style.backgroundColor = "#1F2937";
        document.getElementById("first-line").style.color = "#FFFFFF";
        document.getElementById("title-p").style.color = "#6B7280"
        document.getElementById("light_or_dark_mode").style.backgroundColor = "#273549";
        document.getElementById("light_or_dark_mode").style.color = "#FFFFFF";
        button_color_mode_text.textContent = "Light Mode"
    }
}