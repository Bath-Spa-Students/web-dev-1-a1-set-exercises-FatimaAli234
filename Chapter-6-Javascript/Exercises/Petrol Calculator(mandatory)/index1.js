
document.addEventListener("DOMContentLoaded",function(){
    //add event listener to the calculate button
    document.getElementById("calculateBtn").addEventListener("click",function(){
        //input values
        var costPerliter = parseFloat(document.getElementById("costperliter").value);
        var literspurchased = parseFloat(document.getElementById("literspurchased").value);
        //calculation of total cost
        var totalcost = costPerliter * literspurchased;
        //display total cost
        document.getElementById("totalcost").textContent = "Total Cost: $" + totalcost.toFixed(2);
    });
});
