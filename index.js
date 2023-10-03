const input = document.getElementById("input-dynamic");
const btn = document.getElementById("button-dynamic"); 
const foodcontainer=document.getElementById("food-container");
const List = document.querySelector(".input-stataticts");

function handleClick()
{
    const list = document.createElement("li");
    list.className = "food-items";
    const item = document.createElement("div");
    const nodeT = document.createTextNode(input.value);
    item.append(nodeT);
    list.append(item);
    const removebtn = document.createElement("div");
    removebtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    list.append(removebtn);
    foodcontainer.append(list);
    removebtn.setAttribute("onClick","fooditem(event)");
    refereshUi();
}

btn.addEventListener("click",handleClick);


input.addEventListener("keyup",(event)=>{

    if(event.key === "Enter")
    {
        handleClick();
    }
    else if(event.key === "KeyZ")
    {
        input.value = "";
    }
})

function fooditem(event){
    event.target.parentNode.parentNode.remove()
    refereshUi();
 }

 function refereshUi(){
     const InputContainerEl = document.getElementById("food-container");
     const list = document.querySelector(".food-container-img");
     if(InputContainerEl.children.length > 0)
     {
        list.hidden = true;
        List.innerHTML = `You have ${InputContainerEl.children.length} Lists`;
     }
     else
     {
        list.hidden = false
        List.hidden = true
       
     }
 }


 