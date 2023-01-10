// Length of string
const stt= "Suraj"
 const len=stt.length;
 console.log(len);


 // use of filter 
 const Vehicles = ["Taxi", "Car" , "MoterBike", "Bus", "Bicycle","tesla"];
 let result=Vehicles.filter(item=>item.length>3);
 console.log(result);


 //filter with function 

 const adultcheck = (age)=>
 {
     return age >= 18; 
 }


 const ages = [32, 33, 16, 40];
const result2 = ages.filter(adultcheck);

console.log(result2);
 
 



