    $(".toggler").on("click", () => {
    $(".switch").toggleClass("active")
})

var index = 0;

function allStorage() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--){
        values.push(localStorage.getItem(keys[i]))
    }
    return values;
}

$(".add").on("click", () => {
    if ($(".input-todo").val() === "") {
        alert("Input a value")
    } else {

        index++;

        localStorage.setItem(index, $(".input-todo").val());

        data = localStorage.getItem(index);

        var list = document.querySelectorAll(".list");

        document.querySelector(".todolist").innerHTML +=
            `
             <div class="list" id=${index}>
                 <div class="data">
                     <p class="index">${index}</p>
                     <p class="value">${data}</p>
                 </div>    
                 <button class="fa fa-trash" onclick="deleteList();"></button>      
             </div>
            `
    }
    
})

var listE, dataE, indexE, valueE, deleteE, storage, storageIndex;
var todoList = document.querySelector(".todolist");

var index = 0;
const render = (index, value) => {
    // create elements for .list .data .index .value .delete

    listE = document.createElement("div");
    dataE = document.createElement("div");
    indexE = document.createElement("div");
    valueE = document.createElement("div");
    deleteE = document.createElement("button");

    // add class name for the elements
    listE.className = "list";
    dataE.className = "data";
    indexE.className = "index";
    valueE.className = "value";
    deleteE.className = "fa fa-trash";
    deleteE.id = "delete"

    // append to the todolist
    todoList.appendChild(listE);
    listE.appendChild(dataE);
    dataE.appendChild(indexE);
    dataE.appendChild(valueE);
    listE.appendChild(deleteE);

    indexE.innerHTML = index + ".";
    valueE.innerHTML = value;
}

$(".add").on("click", (event) => {
    if ($(".input-todo").val() === "") {
        alert("Input a value")
    } else {
        index++;
        localStorage.setItem(index, $(".input-todo").val());
        storage = localStorage.getItem(index);
        // storageIndex = localStorage.key(storage);
        render(index, storage);
        $(".input-todo").val("")
        $(".list").css({
            animation: "1s fade-in",
        })
    }

    todoList.scroll(0, todoList.scrollHeight)

})

document.addEventListener("click", function (event) {
    if (event.target.id == "delete") {
        var count = 0;
        var time;

        $(event.target).parent().css({
            animation: "1s fade-out",
        })

        function timer() {
            count++;
            if (count === 100) {
                $(event.target).parent().addClass("no-display")
                count = -10;
                clearInterval(time)
            }
        }

        time = setInterval(timer)

    }

    if (event.target.className === "value") {
        if (event.target.style.textDecoration == "none") {
            console.log("OKay")
            $(event.target).css({
                textDecoration: "line-through red",
            })
        } else {
            $(event.target).css({
                textDecoration: "none",
            })
        }

    }
})


$(".toggler").on("click", () => {
    $(".switch").toggleClass("active");
    $("*").toggleClass("darkmode")
})

$("button.fa-info").on("click", ()=>{
    $("#help-msg").toggleClass("no-display")
})  

var itemE, dataE, valueE, deleteE, storage, storageIndex;
var todoList = document.querySelector(".list");

var index = 0;
const render = (value) => {
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

    // append to the todolist
    todoList.appendChild(itemE);
    itemE.appendChild(dataE);
    dataE.appendChild(valueE);
    dataE.appendChild(deleteE);

    valueE.innerHTML = value;
}

$(".add").on("click", (event) => {
    if ($(".input-todo").val() === "") {
        alert("Input a value")
    } else {
        index++;
        localStorage.setItem(index, $(".input-todo").val());
        storage = localStorage.getItem(index);
        // storageIndex = localStorage.key(storage);
        render(storage);
        $(".input-todo").val("")
        $(".item:last-child").css({
            animation: "1s fade-in",
        })
    }

    todoList.scroll(0, todoList.scrollHeight)

})

document.addEventListener("click", function (event) {
    if (event.target.id == "delete") {
        $(event.target).parent().parent().css({
            animation: "1s fade-out",
            animationDelay: "1s"
        })

        setTimeout(()=> {
            $(event.target).parent().parent().remove()
        }, 2000)
        
    }

    if (event.target.className === "value") {
        if (event.target.style.textDecoration == "none") {
            console.log("OKay")
            $(event.target).css({
                textDecoration: "line-through red",
            })
        } else {
            $(event.target).css({
                textDecoration: "none",
            })
        }

    }
})

