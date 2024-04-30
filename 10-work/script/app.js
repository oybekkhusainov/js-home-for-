let firstname = "Oybek"
let sum = 0;

for(let i = 0; i < firstname.length; i++){
    sum += firstname.charCodeAt(i)
}

document.write(sum)