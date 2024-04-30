let sentence = prompt("Enter sentence: ").trim();
let count = 1;

for (let i = 0; i < sentence.length; i++){
    if(sentence[i] == " "){
        count++
    }
}

document.write(count)