// list of items
let groceryList = [];

// function reads new position from input #item
// and adds it to the list

function addItem(){
        let input = document.getElementById("item");
        let item = input.value;
        input.value = "";
        groceryList.push(item);
        showList();
}

// function removes n-th element of the list
function removeItem(n) {
        groceryList.splice(n,1);
        showList();
}
// function shows wht is in groceryList array in element #list
function showList() {
        let showList = "<ul>"
        for (let i=0; i<groceryList.length; i++){
                showList += "<li>"+groceryList[i]+"<br />";
                showList += "<button onClick='removeItem("+i+");' class='remove'>remove</button>  "
                showList += "</li>";
        }
        showList += "</ul>";
        document.getElementById("list").innerHTML = showList;
}