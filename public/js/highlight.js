const highlight = document.querySelector(".highlight");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    highlight.style.left = `${x}px`;
    highlight.style.top = `${y}px`;
});
