const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()

    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`

    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true){
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')

    setTimeout(()=> {
        message.classList.add('hide')
    },1000)
}
