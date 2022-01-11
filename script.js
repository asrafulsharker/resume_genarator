function addNewWEField(){
    console.log("Adding new field")

    let newNode = document.createElement('textarea')
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Hare')

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton");



    weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Hare')

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton");



    aqOb.insertBefore(newNode,aqAddButtonOb);
}