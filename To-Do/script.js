const add = document.getElementById("addTaskBtn");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const remove = document.getElementById("remove")
const removeTask = document.getElementsByClassName("removeButton")

add.addEventListener("click", ()=> {
    const text = input.value.trim();
    if (text === "") return;
    
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    input.value = "";

    const removeButton = document.createElement("button")
    removeButton.textContent="Remove"

    li.addEventListener("click", ()=>{
        const completed = document.getElementById("completed")
        li.classList.add("completed")
        completed.appendChild(li)

        removeButton.classList.add("removeButton")
        completed.appendChild(removeButton)
    })
    removeButton.addEventListener("click", ()=>{
    removeButton.remove()
    li.remove()
})
});












