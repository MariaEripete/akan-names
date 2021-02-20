const getName=()=>{
    let name= document.getElementById("yourName").value;
}
let yearOfBirth=()=> {
    let yob= document.getElementById("yearBorn").value;
    var yy= parseInt(yob.toString().slice(0, 2))
    var cc= parseInt(yob.toString().slice(2))
}

let monthOfBirth=()=> {
    let mm= document.getElementById("monthBorn").value;
    if (mm<=0 || mm>=12 = true){
        return("Invalid month")
    }
}
let dayOfBirth=()=>{
    let dd= document.getElementById("dayBorn").value;
    if (dd<=0 || dd>31 = true){
        return("Invalid day")
    }
}
let gender=()=>{
    let gen= document.getElementById("male").value;
    let gen1= document.getElementById("female").value;
    console.log(gen || gen1)

}
var results = parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

var mNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var fNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


