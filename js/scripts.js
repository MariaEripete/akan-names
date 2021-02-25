
function myFunction() {
    document.getElementById("myForm").submit();
}

let dayValue=()=>{
    var year =document.getElementById("yearBorn").value;
    var yy= parseInt(year.toString().slice(2,4));
    var cc= parseInt(year.toString().slice(0,2));
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
    //daysOfWeek= daysOfWeek [results];
    var male= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    //if (document.getElementById("gender").checked){
        //var gender = 'male';
    //}
    //else{
        //var gender = 'female';
    //}

    if (document.getElementById("gender"))male.checked;{
        if(results === 0){
            alert ("You were born on "+ daysOfWeek[0] +", Your Akan name is "+ male[0]) 
        }else if(results === 1){
                alert ("You were born on "+ daysOfWeek[1] +", Your Akan name is "+ male[1]) 

        }else if(results === 2){
                alert ("You were born on "+ daysOfWeek[2] +", Your Akan name is "+ male[2]) 

        }else if(results === 3){
                alert ("You were born on "+ daysOfWeek[3] +", Your Akan name is "+ male[3]) 

        }else if(results === 4){
                alert ("You were born on "+ daysOfWeek[4] +", Your Akan name is "+ male[4]) 

        }else if(results === 5){
                alert ("You were born on "+ daysOfWeek[5] +", Your Akan name is "+ male[5]) 

        }else if(results === 6){
                alert ("You were born on "+ daysOfWeek[6] +", Your Akan name is "+ male[6]) 

        }
        //else{
          //  alert("An error has occured")
        //}

    }
    else{
        if(document.getElementById("gender"))female.checked;{
            if (results === 0){
            alert ("You were born on "+daysOfWeek[0]+", Your Akan name is"+ female[0]);
        }else if(results === 1){
                alert ("You were born on "+ daysOfWeek[1] +", Your Akan name is "+ female[1]) 

        }else if(results === 2){
                alert ("You were born on "+ daysOfWeek[2] +", Your Akan name is "+ female[2]) 

        }else if(results === 3){
                alert ("You were born on "+ daysOfWeek[3] +", Your Akan name is "+ female[3]) 

        }
        else if(results === 4){
                alert ("You were born on "+ daysOfWeek[4] +", Your Akan name is "+ female[4]) 

        }
        else{
            if(results === 5){
                alert ("You were born on "+ daysOfWeek[5] +", Your Akan name is "+ female[5]) 

        }
        else if(results === 6){
                alert ("You were born on "+ daysOfWeek[6] +", Your Akan name is "+ female[6]) 

        }
        }   
      }
    }
    //function getName(){
        //alert (dayValue())
    //};










//if (document.getElementById("gender"))male.checked;{
 //   if(daysOfWeek === "Sunday"){
//        alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[0]) 
//  }else if(daysOfWeek === "Monday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[1]) 

 //   }else if(daysOfWeek === "Tuesday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[2]) 

 //   }else if(daysOfWeek === "Wednesday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[3]) 

//    }else if(daysOfWeek === "Thursday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[4]) 

//    }else if(daysOfWeek === "Friday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[5]) 

//    }else if(daysOfWeek === "Saturday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ male[6]) 

///   }

//if(document.getElementById("gender"))female.checked;{
//        if (daysOfWeek ==="Sunday"){
////        alert ("You were born on "+daysOfWeek+", Your Akan name is"+ female[0]);
//    }else if(daysOfWeek === "Monday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[1]) 

//    }else if(daysOfWeek === "Tuesday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[2]) 
//
//    }else if(daysOfWeek === "Wednesday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[3]) 

//    }
//    else if(daysOfWeek === "Thursday"){
//            alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[4]) 

  //  }
   // else{
     //   if(daysOfWeek === "Friday"){
       //     alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[5]) 
//
  //  }
    //else if(daysOfWeek === "Saturday"){
      //      alert ("You were born on "+ daysOfWeek +", Your Akan name is "+ female[6]) 
//
  //  }
//}
//}