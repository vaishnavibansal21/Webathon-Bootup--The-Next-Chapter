let currentLight = 0;
const lights = ["red", "yellow", "green"];

function nextLight() {
  document.getElementById(lights[currentLight]).style.backgroundColor = "gray";
  currentLight = (currentLight + 1) % lights.length;
  document.getElementById(lights[currentLight]).style.backgroundColor =lights[currentLight];
}

function autoCycle() {
  setInterval(() => {
    if (currentLight === 1) {
      document.getElementById("yellow").style.backgroundColor = "yellow";
      setTimeout(() => {
        document.getElementById("yellow").style.backgroundColor = "gray";
      }, 500);
    }
    nextLight();
  }, [5000, 2000, 4000][currentLight]);
}

autoCycle();
