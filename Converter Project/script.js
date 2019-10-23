function reset() {
  document.getElementById("ConvertForm").reset();
}

function run() {
  let binary = document.getElementById('bi').value;
  let hex = document.getElementById('hex').value;
  if (binary > 0) {
    //Convert Binary to Hexadecmial
    let hexa = parseInt(binary, 2).toString(16);
    console.log(hexa);
    document.getElementById('hex').value = hexa
    //Convert Binary to ASCII
  } else if (hex >0,A,B,C,D,E,F  ) {
    //Conver Hexadecmial to Binary
    let bin = (parseInt(hex, 16).toString(2)).padStart(8, '0');
    document.getElementById('bi').value = bin
    console.log(bin)
    //convert Hexa to ASCII
    {
      let str = '';
      for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      document.getElementById('as').value = str;
      console.log(str);
    }
  }
}
