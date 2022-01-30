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


// generating cv 


function generateCV(){
    // console.log("Fuck U")

    let nameField=document.getElementById('namefield').value;

    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;

    // dirtect

    document.getElementById('nameT2').innerHTML = nameField;


    // contact 

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    // address

    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;


    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;


    document.getElementById("linkedT").innerHTML = document.getElementById("linkedfield").value;

    // objecttive
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;


    // we 

    let wes=document.getElementsByClassName('wefield')

    let str=''

    for(let e of wes)
    {
        str=str +`<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;


    // aq 

    let aqs=document.getElementsByClassName('eqfield')

    let str1=''

    for(let e of aqs)
    {
        str1=str1 +`<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}


// print cv 

function printCV(){
    window.print();
}
