const items = document.querySelectorAll(".item");
const contaner = document.querySelector(".box");

items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(()=>{
            item.classList.add("draging");
        },0)
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("draging");
    });
});

const mylist = (e)=>{
    e.preventDefault()
    const dragingitem = contaner.querySelector(".draging")

    const siblings = [...contaner.querySelectorAll(".item:not(.draging)")]

    let nextsibling = siblings.find(sibling=>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    })
    
    if (nextsibling) {
        contaner.insertBefore(dragingitem, nextsibling);
       } else {
        contaner.appendChild(dragingitem);
       }
    
}

contaner.addEventListener("dragover", mylist)