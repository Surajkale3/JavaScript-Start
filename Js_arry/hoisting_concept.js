//Hoisting before 


const ages1 = [32, 33, 16, 40];
const result3 = ages1.filter(adultcheck5);

console.log(result2);


const adultcheck5 = (age)=>
{
    return age >= 18; 
}



//after hoisting  modified function will be  below:
// changing the variable name as its showinhg error for duplicate




const adultcheck4 = (age)=>
{
    return age >= 18; 
}


const ages2 = [32, 33, 16, 40];
const result5 = ages2.filter(adultcheck4);

console.log(result5);


