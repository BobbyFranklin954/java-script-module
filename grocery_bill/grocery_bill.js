

function total_items() {
    let item1 = parseFloat(document.getElementById("grocery1").value);
    let item2 = parseFloat(document.getElementById("grocery2").value);
    let item3 = parseFloat(document.getElementById("grocery3").value);
    let item4 = parseFloat(document.getElementById("grocery4").value);
    let item5 = parseFloat(document.getElementById("grocery5").value);

    let total = item1 + item2 + item3 + item4 + item5;

    document.getElementById("grocery_total").innerText = `Your grocery total is: ${total}`;
}