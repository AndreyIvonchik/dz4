"use strict";

class ToDo {
  addTask() {
    var task = document.getElementById("taskIn").value;
    var data = document.getElementById("dataIn").value;

    if (task && data) {
      document.getElementById("taskIn").value = "";
      document.getElementById("dataIn").value = "";
      document.getElementById("lable-task").classList.remove("active");
      document.getElementById("lable-data").classList.remove("active");
      if (!this.list) {
        this.list = 0;
        document.getElementById("no-tasks").style.display = "none";
      }
      this.list += 1;
      this.createElement(task, data);
    } else if (!task && !data) {
      document.getElementById("taskIn").classList.add("invalid");
      document.getElementById("dataIn").classList.add("invalid");
    } else if (!task)
      document.getElementById("taskIn").classList.add("invalid");
    else if (!data) document.getElementById("dataIn").classList.add("invalid");
  }

  createElement(task, data) {
    var ul = document.getElementById("ul");

    ul.insertAdjacentHTML(
      "beforeEnd",
      `<li id="li-${this.list}" class="collection-item">
            <div class="row">
            <div class="col s1">
                <label>
                <input
                    id="checkbox-${this.list}"
                    type="checkbox"
                    onchange="start.checkboxClick()"/>
                <span></span>
                </label>
            </div>
            <div class="col s7">${task}</div>
            <div class="col s3">${data}</div>
            <div class="col s1">
                <button
                class="btn-floating btn-small waves-effect waves-light red"
                onclick="start.deleteTask()">
                <i id="delete-${this.list}" class="material-icons">delete</i>
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
    var target = event.target;
    var id = +target.id.split("-")[1];
    var element = document.getElementById("li-" + id);

    element.remove();
    if (!document.getElementById("ul").children[2]) {
      document.getElementById("no-tasks").style.display = "block";
      this.list = 0;
    }
  }

  checkboxClick() {
    var target = event.target;
    var id = +target.id.split("-")[1];
    var element = document.getElementById("li-" + id);

    element.classList.toggle("green");
    element.classList.toggle("lighten-3");
  }
}

let start = new ToDo();

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, FormData);
});
