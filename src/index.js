// Your code here

let poster = document.getElementById("poster")
let wideInfo = document.getElementById("wide")
let movieTitle = document.getElementById('title')
let movieRunTime = document.getElementById('runtime')
let movieShowTime = document.getElementById("showtime")
let movieTicket = document.getElementById('ticket-num')
let movieInfo = document.getElementById('film-info')
let movieItems = document.getElementById("item")
let movieButton = document.getElementById("buy-ticket")


let requestFirstMovie = async() => {
    let req = await fetch('http://localhost:3000/films/1')
    let res = await req.json()

    
    poster.setAttribute("src", res.poster)
    movieTitle.textContent = res.title
    movieRunTime.textContent = res.runtime + " minutes"
    movieInfo.textContent = res.description
    movieShowTime.innerText = res.showtime
    let cap = parseInt(`${res.capacity}`)
    let sold = parseInt(`${res.tickets_sold}`)
    movieTicket.innerText = cap -sold

}

let request = async () => {
    let req = await fetch('http://localhost:3000/films/')
    let res = await req.json()
    res.forEach((element) => {
        let li = document.createElement("li")
        li.setAttribute('value', element.id)
        li.innerHTML = element.title
        movieItems.appendChild(li)

        li.addEventListener('click', ()=>{
            poster.setAttribute("src", res[li.value-1].poster)
            movieTitle.textContent = res[li.value-1].title
            movieRunTime.textContent = res[li.value-1].runtime + " minutes"
            movieInfo.textContent = res[li.value-1].description
            movieShowTime.innerText = res[li.value-1].showtime
            let cap = parseInt(`${res[li.value-1].capacity}`)
            let sold = parseInt(`${res[li.value-1].tickets_sold}`)
            movieTicket.innerText = cap - sold
        
        })
    })
    movieButton.addEventListener('click', () => {
        if (parseInt(movieTicket.innerText) <= 1) { 
            movieTicket.textContent = 'Sold Out'
            remainingTicket = document.getElementById('remaining-tickets')
            remainingTicket.style.visibility = 'hidden'
            return;
        }
        else{
            movieTicket.innerText = parseInt(--movieTicket.innerText)
        }
        if (movieTicket.textContent === 'NaN') {
            movieTicket.textContent = 'Sold Out'
        }
    })
}

requestFirstMovie()
request()

