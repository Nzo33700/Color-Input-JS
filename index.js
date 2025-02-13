const colorInput = document.getElementById('color-input')

colorInput.addEventListener("change", (e) => {
    document.body.style.backgroundColor = e.target.value
}); 