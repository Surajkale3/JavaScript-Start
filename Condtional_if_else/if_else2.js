const greeting= (hour)=>
{
    if (hour<12)
    {
      console.log("Good Morning"); 
    }
    else if (hour>=12)
    {
        console.log("Good afternoon");
    }
}
console.log(greeting(12));