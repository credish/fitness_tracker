let myFitness=[];
const date = document.getElementById("date");
const calories = document.getElementById("calories");
const steps = document.getElementById("steps");
const weight = document.getElementById("weight");
const water = document.getElementById("water");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tableEl = document.getElementById("table-el");
const fitnessFromLocalStorage = JSON.parse(localStorage.getItem("myFitness") );

if (fitnessFromLocalStorage) {
    myFitness = fitnessFromLocalStorage;
    render(myFitness);
}

function render (fitness) {
    let listItems="";
    for (let i = 0, n = fitness.length; i < n; i++){
        
        //Template String
        listItems += `
            <td>${fitness[i]}
            </td>`;        
    }

    tableEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
    myFitness.push(date.value);
    date.value="";

    myFitness.push(calories.value);
    calories.value="";

    myFitness.push(steps.value);
    steps.value="";

    myFitness.push(weight.value);
    weight.value="";

    myFitness.push(water.value);
    water.value="";

    localStorage.setItem("myFitness", JSON.stringify(myFitness));
    render(myFitness);
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myFitness = [];
    render(myFitness);
});








