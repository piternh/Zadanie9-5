var btn = document.getElementsByClassName('button');

var x = btn.length;

console.log(x);

for ( var i= 0 ; i <= x ; i++ ) {
  
  var text = btn[i].innerText;
  console.log(text);
  
}

