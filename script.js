let list = document.querySelector(".todo-list");
let items = list.children;
let emptyListMessage = document.querySelector(".empty-tasks");
let newItemForm = document.querySelector(".add-form");
let newItemTitle = newItemForm.querySelector(".add-form-input");

let reportCompletion = () => {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden");
  }
};

let addCheckHandler = (item) => {
  let checkbox = item.querySelector(".todo-list-input");
  checkbox.addEventListener("change", () => {
    item.remove();
    reportCompletion();
  });
};

for (let i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let taskText = newItemTitle.value;
  console.log(taskText);
});
