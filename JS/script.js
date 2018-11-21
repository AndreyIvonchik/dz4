'use strict';

class ToDo{
    
    addTask(){
        var task = document.getElementById("taskIn").value;
        var data = document.getElementById("dataIn").value;
        
        if(task && data){
            document.getElementById("taskIn").value = "";
            document.getElementById("dataIn").value = "";
            if(!this.list){
                this.list = 0;
                document.getElementById("no-tasks").style.display = "none";
            }
            this.list += 1;
            this.createElement(task, data);
        }
        else{
            alert("Не заполнено!");
        }
    }

    createElement(task, data){
        var ul = document.getElementById("ul");
        var li = document.getElementById("li-0");
        var newLi = li.cloneNode(true);
        
        newLi.id = "li-" + this.list;
        newLi.childNodes[1].childNodes[3].textContent = task;
        newLi.childNodes[1].childNodes[5].textContent = data;
        ul.appendChild(newLi);
    }

    clearAll(){
        var ul = document.getElementById("ul");

        this.list = 0;
        document.getElementById("no-tasks").style.display = "block";
        while (ul.children[3]) {
            ul.removeChild(ul.lastChild);
        }
    }

    deleteTask(){
        var target = event.target;
        var element = target.parentNode.parentNode.parentNode.parentNode;

        element.parentNode.removeChild(element);
        this.list -= 1;
        if(!this.list) document.getElementById("no-tasks").style.display = "block";
    }

    checkboxClick(){
        var target = event.target;
        var element = target.parentNode.parentNode.parentNode.parentNode;

        element.classList.toggle("green");
        element.classList.toggle("lighten-3");
    }
}

let start = new ToDo();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, FormData);
  });