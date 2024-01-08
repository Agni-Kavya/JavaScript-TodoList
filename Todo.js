var ul=document.getElementById("list-container")
    var input=document.getElementById("input")
    function add(){
        var listitem=document.createElement("li")
        listitem.innerHTML=input.value+"<button onclick='deleteItem()'>DELETE</button>"
        ul.append(listitem)
    }
    function deleteItem()
    {
        event.target.parentElement.remove()
    }