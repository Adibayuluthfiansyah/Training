let formInput = document.getElementById("form-input");
let btnSub = document.getElementById("btn-sub");
let list = document.querySelector(".list-group");

// ==> Main ToDo
btnSub.addEventListener("click", () => {
  list.innerHTML += `
<li class="list-group-item
    list-group-item-dark
    d-flex 
    justify-content-between align-items-center
    mt-2">
    <h3>${formInput.value}</h3>
    <span class="fs-4"><i class="bi bi-trash" id="delete"></i></span>
</li>
  `;
  formInput.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.id == "delete") {
    e.target.parentElement.parentElement.remove();
  }
});
