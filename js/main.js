document.querySelector("#task-form").addEventListener("submit", function (event) {
    event.preventDefault(); // دايمًا خليها فوق

    var input = document.querySelector("#works");
    var text = input.value;
    var result = document.querySelector("#result");

    if (text === "") {
        alert("Please Enter Your Works");
    } else {
        var li = document.createElement("li");
        li.innerText = text;
        result.appendChild(li);

        input.value = ""; 
        li.style.color
    }
});
