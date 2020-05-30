const inputs = document.querySelectorAll('.input');

function focusfunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

inputs.forEach(input => {
    input.addEventListener('focus', focusfunc);
});