const checkbox1 = document.getElementById("checkbox1");

const cambioColoreBtn = () => {
  if (checkbox1.checked) {
    document.getElementById("proceed").classList.add("universal-style-btn-slc");
  } else {
    document
      .getElementById("proceed")
      .classList.remove("universal-style-btn-slc");
  }
};

checkbox1.onclick = cambioColoreBtn;
