function addtodo() {
    let name = document.getElementById('name').value
    

    document.getElementById('error').innerHTML = ""
    
    if (name == '') {
        document.getElementById('error').innerHTML = "Please Enter a Value"
    }
    else {
        
    let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;
        let pos = box.firstElementChild
    let a = document.createElement('a')
    a.textContent="X"
        a.href = 'javascript:void(0)';
        a.classList='remove'
    li.appendChild(a)
        
        if (pos == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, pos)
        }
    }
    document.getElementById('name').value=''
}

let btn = document.querySelector('ul');
btn.addEventListener('click',function (e)  {
    let box = document.getElementById('box')
    let li = e.target.parentNode;
    box.removeChild(li)
})


//Function call on Enter key press

let input=document.getElementById('name')

input.addEventListener('keyup', function (event){
    if (event.keyCode === 13) {
        addtodo()
    }
})