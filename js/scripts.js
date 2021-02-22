let akan=()=>{
    var year =document.getElementById("yearBorn").value;
    var yy= parseInt(year.toString().slice(2,4));
    var cc= parseInt(year.toString(slice(0,2)));
    var month= document.getElementById("monthBorn").value;
    var mm= parseInt(month)
    var day= document.getElementById("dayBorn").value;
    var dd= parseInt(day);
    if (dd<0 || dd>31){
        alert ("invalid date!");
    }
    if (mm<=0 || mm>12){
        alert ("Invalid month");
    }

    var results= parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    let daysOfWeek= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let daysOfWeek= daysOfWeek [results];
    var male= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if (document.getElementById("gender").checked){
        var gender = 'male';
    }
    else{
        var gender = 'female';
    }

    var answer = "Your akan name is "+ (answer)



    if (gender ==="male" && daysOfWeek ==="Sunday"){
        return answer((male[results]));
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Monday"){
        return answer((male[results]));
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Tuesday"){
        return answer((male[results]));
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Wednesday"){
        return answer((male[results]));
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Thursday"){
        return answer((male[results]));
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Friday"){
        return answer(male[results]);
    }
    else{
        if (gender ==="male" && daysOfWeek ==="Saturday"){
        return answer(male[results]);
    }

    if (gender ==="female" && daysOfWeek ==="Sunday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Monday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Tuesday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Wednesday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Thursday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Friday"){
        return answer(female[results]);
    }
    else{
        if (gender ==="female" && daysOfWeek ==="Saturday"){
        return answer(female[results]);
    }
    
}












let yearOfBirth=()=> {
    let yob= document.getElementById("yearBorn").value;
    var yy= parseInt(yob.toString().slice(0, 2))
    var cc= parseInt(yob.toString().slice(2))
}

let monthOfBirth=()=> {
    let mm= document.getElementById("monthBorn").value;
    if (mm<=0 || mm>=12) = true;{
        return("Invalid month")
    }
}
let dayOfBirth=()=>{
    let dd= document.getElementById("dayBorn").value;
    try{
        if (dd<=0 || dd>31) throw "Invalid day";
    }
    catch(err){
        message.innerHTML = err;
    }
}
let gen=()=>{
    let gen= document.getElementById("male").value;
    let gen1= document.getElementById("female").value;
    console.log(gen || gen1)

}
var results = parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

var mNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var fNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]


