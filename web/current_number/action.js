// let nubmerInput = document.getElementById('numberInput');

// nubmerInput.
const postNumber = () => {
  let nubmerInputValue = document.getElementById("numberInput").value;
  console.log(nubmerInputValue);
  fetch("/current_number", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      number: nubmerInputValue,
    }),
  });
};
