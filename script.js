//your code here

function removeaAnThe(str){
  let words=str.split(" ");
  let toFilter=["a","an","the"];
  let newStr=words.filter((word)=>!toFilter.includes(word.toLowerCase()));
  return newStr.join(" ");
}

let inputArr=[];
let noOfItems=prompt("Enter number of items: ");
for(let i=0;i<noOfItems;i++){
	inputArr.push(prompt(`Enter the ${i}th item: `));
}

// for(let i=0;i<inputArr.length;i++){
// 	let sent=inputArr[i];
// 	let filteredSent=removeaAnThe(sent);
	
// }
function sortArr(inputArr){
	
let filteredArray=inputArr.map(sent=>{
	return removeaAnThe(sent);
})

// alert(filteredArray.sort())
return filteredArray.sort();
}

sortArr(inputArr);
