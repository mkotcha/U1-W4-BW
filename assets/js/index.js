const checkbox1 = document.getElementById("checkbox1");

const cambioColoreBtn = () => {
  if (checkbox1.checked) {
    document.getElementById("proceed").classList.add("proceed-checked");
  } else {
    document.getElementById("proceed").classList.remove("proceed-checked");
  }
};

checkbox1.onclick = cambioColoreBtn;
