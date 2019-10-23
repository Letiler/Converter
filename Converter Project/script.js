//Binary to Hexadecmial
function binToHex(number) {
  let hexa = parseInt(number, 2).toString(16).toUpperCase();
  document.getElementById('hex').value = hexa;
  console.log(hexa);
}

//Binary to ASCII
function binToAs(str) {
  let binString = '';
  str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  document.getElementById('as').value = binString;
  console.log(binString);
}

//Hexadecmial to Binary
function hexToBin(number) {
  let hexa = parseInt(number, 16).toString(2).substr(-8);
  document.getElementById('bin').value = hexa;
  console.log(hexa);
}

//Hexadecmial to ASCII
function hexToAsc(number) {
  let hex = number.toString();
  let str = '';
  for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  document.getElementById('as').value = str;
  console.log(str);
}

//ASCII to Binary
function asToBin(text) {
  let length = text.length,
       output = [];
   for (let i = 0;i < length; i++) {
     let bin = text[i].charCodeAt().toString(2);
     output.push(Array(8-bin.length+1).join("0") + bin);
   }
    document.getElementById('bin').value = output;
    console.log(output);
}

//ASCII to Hexadecimal
function asToHex(str) {
  let arr1 = [];
	for (let n = 0, l = str.length; n < l; n ++)
     {
		let hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
  }
  document.getElementById('hex').value = arr1;
  console.log(arr1);
}
