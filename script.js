let taskbox = document.getElementById("taskbox");
let add = document.getElementById("save");
let inputTask = document.getElementById("inputTask");

// on button event to perform add task and remove function.
add.addEventListener("click", (e) => {
  e.preventDefault();

// creating new element ul.
  let newElement = document.createElement("ul");
   
  // putting text value in ul element
  newElement.innerHTML = ` ${inputTask.value}  <p>X</p>`;

  // putting ul element in taskbox container
  taskbox.appendChild(newElement);

  inputTask.value = "";

  // appling remove functionality in remove icon.
  newElement.querySelector("p").addEventListener("click", () => {
    newElement.remove();
  });
});
