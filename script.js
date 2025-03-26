function changeTableStyle() {
    let table = document.getElementById("studentTable");

    if (!table) {
        console.log("Table not found");
        return;
    }

    table.style.backgroundColor = "yellow";

    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = "blue";
        th.style.color = "white";
    }

    let rows = table.getElementsByTagName("tr");
    for (let row of rows) {
        let cells = row.getElementsByTagName("td");
        if (cells.length > 0) {
            let name = cells[0].textContent;
            let age = cells[1].textContent;
            let course = cells[2].textContent;

            if (name === "Maria Santos" && age === "19" && course === "Information Technology") {
                row.style.backgroundColor = "white";
            } else {
                row.style.backgroundColor = "yellow";
            }
        }
    }
}
