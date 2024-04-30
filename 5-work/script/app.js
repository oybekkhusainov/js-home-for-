let reading = +prompt("Reading balingizni kiriting:")
let speaking = +prompt("Speaking balingizni kiriting:")
let writing = +prompt("Writing balingizni kiriting:")
let listening = +prompt("Listening balingizni kiriting:")

const nem = ((reading+speaking+writing+listening)/4);

if(nem >=5 && nem <=6){
    document.write("A1 " + nem);
}
else if (nem > 6 && nem <= 7.5){
    document.write("B1 " + nem);
}
else if (nem > 7.5 && nem <= 9){
    document.write("C1 " + nem);
}
else{
    document.write("Bunaqa balik sistema yoq "+ nem)
}
