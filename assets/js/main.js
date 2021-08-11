$(".toggler").on("click", () => {
    $(".switch").toggleClass("active");
    $("*").toggleClass("darkmode")
})

var todoList = document.querySelector(".list");
var itemE, dataE, valueE, deleteE, storage, getStorageIndex, sumIndex, todoIndex, getTotalIndex;

var storeIndex = function () {
    getStorageIndex = localStorage.getItem("index");
    sumIndex = parseInt(getStorageIndex) + 1;
    localStorage.setItem("index", String(sumIndex));
    getTotalIndex = localStorage.getItem("index");
    return getTotalIndex;
}

if (localStorage.length === 0) {
    localStorage.setItem("index", "0");
}

const render = (value, elementId) => {
    // create elements for .list .data .index .value .delete

    itemE = document.createElement("li");
    dataE = document.createElement("div");
    valueE = document.createElement("div");
    deleteE = document.createElement("button");

    // add class name for the elements
    itemE.className = "item";
    dataE.className = "data";
    valueE.className = "value";
    deleteE.className = "fa fa-trash";
    deleteE.id = "delete"

    // id name
    itemE.id = elementId;

    // append to the todolist
    todoList.appendChild(itemE);
    itemE.appendChild(dataE);
    dataE.appendChild(valueE);
    dataE.appendChild(deleteE);

    valueE.innerHTML = value;

    if (valueE.innerHTML === ""){
        valueE.parentElement.parentElement.remove();
    }

    document.querySelector(".todo-panel").scroll(0, todoList.scrollHeight);

}
var elementId;
$(".add").on("click", (event) => {
    if ($(".input-todo").val() === "") {
        // alert("Input a value");
        $(".input-todo").css({
            animation: "shake .5s"
        })
        setTimeout(() => {
            $(".input-todo").css({
                animation: ""
            })
        }, 1000)

    } else {
        todoIndex = "todo" + storeIndex();
        var todoID = "todo-ID" + getTotalIndex;
        localStorage.setItem(todoIndex, $(".input-todo").val())
        localStorage.setItem(todoID, todoIndex);
        var storage = localStorage.getItem(todoIndex);
        getTotalIndex = localStorage.getItem("index");
        elementId = localStorage.getItem("todo-ID" + getTotalIndex);

        render(storage, elementId);
        $(".input-todo").val("")
        $(".item:last-child").css({
            animation: "1s fade-in",
        })


    }

})

var targetID;

document.addEventListener("click", function (event) {
    if (event.target.id == "delete") {
        $(event.target).parent().parent().css({
            animation: "1s fade-out",
            animationDelay: "1s"
        })
        setTimeout(() => {
            $(event.target).parent().parent().remove()
        }, 2000)
        targetID = event.target.parentElement.parentElement.id;
        localStorage.removeItem(targetID);
    }

    if (event.target.className === "data" || event.target.className === "value") {
        $(event.target).parent().toggleClass("cancled")
    }
})

var autoRender = () => {
    
    var values = [];
    for (i = 1; localStorage.length > i; i++) {
        elementId = localStorage.getItem("todo-ID" + i);
        var storage = localStorage.getItem("todo" + i);
        values.push(storage);
        render(values[i - 1], elementId);
    }

    return values;
}

window.onload = () => {
    autoRender();
}