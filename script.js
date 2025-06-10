function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Masukan Nama dulu!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    this.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑";
  delBtn.className = "delete-btn";
  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
