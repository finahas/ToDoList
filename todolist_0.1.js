function fun1(){

    var item = document.getElementById("input1").value;
    var text = document.createTextNode(item);
    var listelement = document.createElement("li");
    listelement.appendChild(text);
    document.getElementById("todolist").appendChild(listelement);

}



