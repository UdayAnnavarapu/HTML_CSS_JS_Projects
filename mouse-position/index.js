const containerE1 = document.querySelector(".container");

window.addEventListener("mousemove", (position)=>
{containerE1.innerHTML = 
    `<div class="mouse-position">
        ${position.clientX}
        <h4>Mouse X Position(px)</h4>
    </div>
    <div class="mouse-position">
        ${position.clientY}
        <h4>Mouse Y Position(px)</h4>
    </div>`

});