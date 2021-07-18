let close = document.querySelector('.li-pos');
let openNow =document.querySelector('.fa-bars');
let sideBarMenu = document.querySelector('.nav');


openNow.addEventListener('click', ()=>{
    sideBarMenu.style.width="25%";
})


close.addEventListener('click', ()=>{
    if(window.innerWidth < 769){
        sideBarMenu.style.width="0";
    }
})



// console.log(year);
// console.log(month);
// console.log(day);


    // alert("The form was submitted");
    const male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const female=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    const days= ['Monday', 'Tuesday','Wednesday','Thursday','Friday'];

//    var akanR = document.getElementById("textR").innerHTML;


    // event.preventDefault();
  
    var day1;
        
    function getValue(){
        var year = document.getElementById('birthyear').value;
        var CC = parseInt(year.substring(0,2));
        var YY =parseInt(year.substring(2,4));
        var MM = parseInt(document.getElementById('birthmonth').value);
        var DD = parseInt(document.getElementById('birthday').value);
       
        
    
        ans = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
        console.log(ans);
        return (Math.floor(ans));
 
    // console.log(day1);
    // return (Math.floor(d));
    }
    

    
    
   

function getGender(){
    var First = document.getElementById('first-name').value;
    var Last = document.getElementById('last-name').value;
       
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
        return false;
      }
      switch(gender){
        case "male":
          if (day1 == 1){
            alert(First + Last +" You were born on " +days[0] + " and Your akan name is " +male[0]);
          }
          else if(day1 == 2){
            alert(First + Last +" You were born on "+days[1] + " and Your akan name is " +male[1]);
          }
          else if(day1 == 3){
            alert(First + Last +" You were born on " +days[2]+ " and Your akan name is " +male[2]);
          }
          else if(day1 == 4){
            alert(First + Last +" You were born on "+days[3] +  " and Your akan name is " +male[3]);
          }
          else if(day1 == 5){
            alert(First + Last +" You were born on "+days[4] +  " and Your akan name is " +male[4]);
          }
          else if(day1 == 6){
            alert(First + Last +" You were born on "+days[5] +  " and Your akan name is " +male[5]);
          }
          else if(day1 == -0){
            alert(First + Last +" You were born on "+days[6] + " and Your akan name is " +male[6]);
          }
        break;
        case "female":
          if (day1 == 1){
            alert(First + Last +" You were born on "+days[0] + " and Your akan name is  " +female[0]);
          }
          else if(day1 == 2){
           alert(First + Last +" You were born on " +days[1] + " and Your akan name is " +female[1]);
          }
          else if(day1 == 3){
            alert(First + Last +" You were born on " +days[2] + " and Your akan name is " +female[2]);
          }
          else if(day1 == 4){
            alert(First + Last +" You were born on " +days[3] + " and Your akan name is " +female[3]);
          }
          else if(day1 == 5){
            alert(First + Last +" You were born on " +days[4] + " and Your akan name is " +female[4]);
          }
          else if(day1 == 6){
            alert(First + Last +" You were born on " +days[5] + " and Your akan name is " + female[5]);
          }else if(day1 == -0){
            alert(First + Last +" You were born on " +days[6] + " and Your akan name is " +female[6]);
          }
        break
        default:
              
      
    }
}


function getAkanNames(){
    
  day1 = getValue();
  getGender();
}





