
function search(){
  let input = document.querySelector("input");
  window.open(`./new.html?${input.value}`, "_blank")
}
