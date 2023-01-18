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
console.log(salary(6000,6000));
