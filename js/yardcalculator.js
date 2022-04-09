



function calc() {

  let l = document.getElementById("area-length").value; //in feet
  let w = document.getElementById("area-width").value; //in feet
  let d = document.getElementById("depth").value; //in inches

  l = l / 3;
  w = w / 3;
  d = d / 36;
  let v = l * w * d;
  let result = Math.ceil(v);

  document.getElementById("results").innerHTML = `You will need ${result} yards of mulch.`;
  document.getElementById("yardcalculator").reset();
}
