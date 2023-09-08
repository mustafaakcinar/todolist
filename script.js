// tanımlamalarımızı yaptık
let taskDOM = document.querySelector("#task")
let listDOM = document.querySelector("#list")
let toastDOM = document.querySelectorAll("#liveToast")

// function for added new task to table
function newElement() {
    if(taskDOM.value === "") {
        $(toastDOM[1]).toast('show');
        return;
    } else {
        $(toastDOM[0]).toast('show')
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${taskDOM.value} <span class="close badge badge-primary badge-pill">\u00d7</span> `;
        listDOM.appendChild(liDOM);
    }
    taskDOM.value = ""
    saveData()
}

// function for checked and delete the task
listDOM.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData()
    } else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData()
    }
},false)
// localstorage data save
function saveData(){
    localStorage.setItem("data", list.innerHTML)
}

// localstorage data pull for restart
function getData() {
    list.innerHTML = localStorage.getItem("data")
}
getData();
