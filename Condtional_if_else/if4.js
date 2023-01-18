const salary= (a,b)=>
{
    let mySalary=a;
    let yourSalary=b;
if (mySalary > yourSalary)
{
    console.log("My salary is more than yours");
}
else if (mySalary===yourSalary)
{
    console.log("My salary is equal to your salary");
}
else 
{
    console.log("My salary is less than your salary");
}
}
return(salary(60000,60000));
