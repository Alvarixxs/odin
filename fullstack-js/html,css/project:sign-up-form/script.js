
let form = document.getElementById('form');
let pass = document.getElementById("pass");
let conf_pass = document.getElementById("conf_pass");
let button = document.getElementById("button");
let div = document.getElementById("pass-div");

let p = document.createElement('p')
p.innerText = "* Passwords do not match";
p.style.color = 'red';

function validateMatch() {
    const password = pass.value;
    const confirmation_password = conf_pass.value;

    if (password !== confirmation_password) {
        pass.className = "invalid"
        conf_pass.className = "invalid"
        pass.setCustomValidity("Passwords do not match")
        div.appendChild(p)
    }
    else {
        pass.className = "valid"
        conf_pass.className = "valid"
        pass.setCustomValidity("")
        div.removeChild(p)
    }
}

pass.addEventListener("input", validateMatch);
conf_pass.addEventListener("input", validateMatch);
