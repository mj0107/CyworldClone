const secretBtn = document.querySelector(".secret-btn");

function getTextFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "text/plain";
  input.onchange = function(event) {
    processFile(event.target.files[0]);
  };
  input.click();
}

function processFile(file) {
  const reader = new FileReader();
  reader.readAsText(file, "utf-8");

  reader.onload = () => {
    document.querySelector(".secret > .diary_contents").innerText = reader.result;
    document.querySelector(".secret").style.display = "flex";
  }
}

secretBtn.addEventListener("click", getTextFile);