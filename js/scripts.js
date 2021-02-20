const getName=()=>{
    let name= document.getElementById("yourName").value;
    console.log (name)
}
let yearOfBirth=()=> {
    let yob= document.getElementById("yearBorn").value;
    console.log (yob)
}

let monthOfBirth=()=> {
    let mm= document.getElementById("monthBorn").value;
    console.log (mm)
}
let dayOfBirth=()=>{
    let dd= document.getElementById("dayBorn").value;
    console.log (dd)
}
let gender=()=>{
    let gen= document.getElementById("male").value;
    let gen1= document.getElementById("female").value;
    console.log(gen || gen1)

}


