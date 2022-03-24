// Your code here

//let posterWall = document.getElementById("posterWall")
let poster = document.getElementById("poster")
let wideInfo = document.getElementById("wide")
let movieTitle = document.getElementById('title')
let movieRunTime = document.getElementById('runtime')
let movieShowTime = document.getElementById("showtime")
let movieTicket = document.getElementById('ticket-num')
let movieInfo = document.getElementById('film-info')
let movieItems = document.getElementById("item")
//let movieGrid = document.getElementById("grid")
let movieButton = document.getElementById("buy-ticket")

console.log(movieButton)


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
    //console.log(` - ${res.tickets_sold}`)

}

let request = async () => {
    let req = await fetch('http://localhost:3000/films/')
    let res = await req.json()
    res.forEach((element) => {
        
       // console.log(element)
    //    let newPicture = document.createElement("img")
    //    newPicture.setAttribute('src', element.poster)
    //    movieItems.appendChild(newPicture)
        let li = document.createElement("li")
        li.innerHTML = element.title
        movieItems.appendChild(li)

       //movieItems.addEventListener('click', () => {
        // poster.setAttribute("src", element.poster)
        // movieTitle.textContent = element.title
        // movieRunTime.textContent = element.runtime + " minutes"
        // movieInfo.textContent = element.description
        // movieShowTime.innerText = element.showtime
        // movieTicket.textContent = `${element.capacity} - ${element.tickets_sold}` 
        //console.log(newPicture)
       //})

        

    })

    movieButton.addEventListener('click', () => {
        if (parseInt(movieTicket.innerText) <= 0) {return null};
        movieTicket.innerText = parseInt(--movieTicket.innerText)
    })


}

requestFirstMovie()
request()