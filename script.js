function changeTableStyle() {
    let table = document.getElementById("studentTable");
    

    if (!table) {
        console.log("Table not found");
        return;
    }


    table.style.border = "2px solid red";
    table.style.backgroundColor = "yellow";

 
    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = "red";
        th.style.color = "white";
    }


    let tds = table.getElementsByTagName("td");
    for (let td of tds) {
        td.style.backgroundColor = "lightyellow";
        td.style.color = "black";
    }
}