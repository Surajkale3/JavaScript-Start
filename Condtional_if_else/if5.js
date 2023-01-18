const eligibility=(age)=>
{
    if (age>18)
    {
        console.log("you are eligible for driving lisence.");
    }
    else if (age===18)
    {
    console.log("you are going to be eligible for driving lisence soon.");
    }
    else
    {
        console.log("you are not eligible.");
    }
}
console.log(eligibility(19));