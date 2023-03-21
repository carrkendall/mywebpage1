const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementbyId('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokeEl.innerHTML = data.joke
}