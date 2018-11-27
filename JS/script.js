"use strict";

class ToDo {
  addTask() {
    var task = document.getElementById("taskIn");
    var data = document.getElementById("dataIn");

    if (task.value && data.value) {
      document.getElementById("lable-task").classList.remove("active");
      document.getElementById("lable-data").classList.remove("active");
      if (!this.list) {
        this.list = 0;
        document.getElementById("no-tasks").style.display = "none";
      }
      this.list += 1;
      this.createElement(task.value, data.value);
      task.value = "";
      data.value = "";
    } else if (!task.value && !data.value) {
      task.classList.add("invalid");
      data.classList.add("invalid");
    } else if (!task.value) task.classList.add("invalid");
    else if (!data.value) data.classList.add("invalid");
  }

  createElement(task, data) {
    var ul = document.getElementById("ul");

    ul.insertAdjacentHTML(
      "beforeEnd",
      `<li id="li" class="collection-item">
            <div class="row">
            <div class="col s1">
                <label>
                <input
                    id="checkbox"
                    type="checkbox">
                <span></span>
                </label>
            </div>
            <div class="col s7">${task}</div>
            <div class="col s3">${data}</div>
            <div class="col s1">
                <button
                class="btn-floating btn-small waves-effect waves-light red">
                <i id="delete" class="material-icons">delete</i>
                </button>
            </div>
            </div>
        </li>`
    );
  }

  clearAll() {
    var ul = document.getElementById("ul");

    this.list = 0;
    document.getElementById("no-tasks").style.display = "block";
    while (ul.children[2]) {
      ul.removeChild(ul.lastChild);
    }
  }

  deleteTask() {
    var element = event.target.closest("#li");

    element.remove();
    if (!document.getElementById("ul").children[2]) {
      document.getElementById("no-tasks").style.display = "block";
      this.list = 0;
    }
  }

  checkboxClick() {
    var element = event.target.closest("#li");

    element.classList.toggle("green");
    element.classList.toggle("lighten-3");
  }
}

var start = new ToDo();
var add = document.getElementById("add");
var clear = document.getElementById("clear");

add.addEventListener("click", start.addTask.bind(start));
clear.addEventListener("click", start.clearAll.bind(start));
document.addEventListener("click", function(element) {
  if (element.target && element.target.id == "delete") {
    start.deleteTask();
  } else if (element.target && element.target.id == "checkbox") {
    start.checkboxClick();
  }
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, FormData);
});
