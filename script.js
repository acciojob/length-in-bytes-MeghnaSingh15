const byteSize = (str) => {
  // write your code here
	let text = str;
	let blob = new blob([text],{type:'text/plain'});
	console.log(blob.size);
	
	
};

// Do not change the code below
//const str = prompt("Enter some string.");
//alert(byteSize(str));
