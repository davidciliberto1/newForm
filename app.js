const inputs = document.querySelectorAll('.input');

function focusfunc(){
    let parent = this.parentNode.parentNode;
    parent.classlist.add('focus');
}

inputs.forEach(input => {
    input.addEventListener('focus', focusfunc);
});