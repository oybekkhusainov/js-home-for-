let alphabet = {};

for (let i = 65; i <= 90; i ++){
    alphabet[i] = String.fromCharCode(i);
}

let sum = 0;

for (let key in alphabet) {
    if (key % 2 !== 0) {
        sum += +key;
    }
}

document.write(sum);