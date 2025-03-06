const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  if (input.value) {
    let selectedDate = new Date(input.value);
    let perDate = new persianDate(selectedDate).format("YYYY/MM/DD");
    p.style.display = "block";
    p.style.backgroundColor = "#FFA570";
    p.innerHTML = `امروز برابر ${perDate} میباشد.`;
  }
  else{
    p.style.display = "block";
    p.style.backgroundColor = "#FAD074";
    p.innerHTML = `ابتدا تاریخ را انتخاب کنید.`
  }
});
