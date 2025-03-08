const input = document.querySelector(".date");
const btn = document.querySelector("button");
const p = document.querySelector("p");
const reset = document.querySelector(".reset");

btn.addEventListener("click", () => {
  if (input.value) {
    let selectedDate = new Date(input.value);
    let perDate = new persianDate(selectedDate).format("YYYY/MM/DD");
    p.style.display = "block";
    p.style.backgroundColor = "#FFA570";
    p.innerHTML = `امروز برابر با ${perDate} میباشد.`;
    reset.style.display = "block";
  } else {
    p.style.display = "block";
    p.style.backgroundColor = "#FAD074";
    p.innerHTML = `ابتدا تاریخ را انتخاب کنید.`;
  }
});

reset.addEventListener("click", () => {
  p.style.display = "none";
  reset.style.display = "none";
});
