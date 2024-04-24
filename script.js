let url = "https://jsonplaceholder.typicode.com/todos/1";

window.onload = function(){
    function jsonget(){
        fetch(url)
        .then(res => res.json())
        .then(json => heading_node.nodeValue = json.userId)
    }
    var heading = document.createElement("h1");
    var heading_node = document.createTextNode("nulo")
    heading.appendChild(heading_node)
    document.body.appendChild(heading)

    setInterval(jsonget(), 500)
}