const submit = document.querySelector('#submit')
const returnBtn = document.querySelector('#dimiss-button')

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const inputEmail = document.querySelector('#inputEmail')
    let email = inputEmail.value
    const error = document.getElementById('errorMensage')
    let nothing = 'Valid email required!'

    console.log(email)

    emailValidate(email, inputEmail, error, nothing)
})

returnBtn.addEventListener('click', ()=>{
    emailReturn()
})

function emailValidate(email, inputEmail, error, nothing){
    const divResult = document.getElementById('result')
    const content = document.getElementById('content')
    const resultEmail = document.getElementById('result-email')
    let caracter = /([a-zA-Z0-9]+)(\@)([a-zA-Z]+)(\.)([a-zA-Z.]+)/;
    let result = caracter.test(email)
    if (result){
        inputEmail.classList.add('valid')
        inputEmail.classList.remove('error')
        error.innerHTML = ''
        divResult.style.display = 'flex'
        content.style.display = 'none'
        resultEmail.innerHTML = email
    } else{
        error.innerHTML = nothing
        inputEmail.classList.add('error')
        inputEmail.classList.remove('valid')


    }
}

function emailReturn(){
    const divResult = document.getElementById('result')
    const content = document.getElementById('content')
    divResult.style.display = 'none'
    content.style.display = 'flex'
    
}

