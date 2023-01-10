// use of filter

const color=['red','blue','black','yellow','green','pink',];
let output=color.filter(item=>item.length>4);
console.log(output);

// filter with function
const infant= (age)=>
{
    return age >10;
}
const ages=[5,6,15,18,20,9,3,11,19,7];
let result=ages.filter(infant);

console.log(result);