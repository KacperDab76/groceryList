// list of items
let groceryList = [];

// function reads new position from input #item
// and adds it to the list

function addItem(){
        let input = document.getElementById("item");
        let item = input.value;
        input.value = "";
        if (item.length > 0){
                groceryList.push(item);
        }
        showList();
}

// function removes n-th element of the list
function removeItem(n) {
        groceryList.splice(n,1);
        showList();
}
// function shows what is in groceryList array in element #list
function showList() {
        let showList = "<ul>";
        let removeList = "<ul class='removeList'>";
        for (let i=0; i<groceryList.length; i++){
                showList += "<li>"+groceryList[i]+"<br />";
                removeList += "<li><button onClick='removeItem("+i+");' class='remove'> remove "+groceryList[i] +"</button> </li> ";
                showList += "</li>";
        }
        showList += "</ul>";
        removeList += "</ul>";

        document.getElementById("list").innerHTML = showList+removeList;
}