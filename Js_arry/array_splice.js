const somevariable= ()=>
{
    const vowel=['a','e','o','u']
    vowel.splice(2, 0,'i');
    console.log(vowel);

}
let arr= somevariable();
console.log(arr);