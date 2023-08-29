document.querySelector('button').addEventListener(('click'), () => {
    callFetch()
})
document.querySelector('.block').addEventListener(('click'), (event) => {
    event.target.remove()
    event.target.remove()
})

async function callFetch(){
    fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
      .then(response => response.json())
      .then(json => printElem(json))
}

function printElem(elements){
    elements.map(elem => {
        const image = document.createElement('img')

        image.src = elem.url

        image.style.display = 'flex-box'
        image.style.marginBottom = '10px'
        image.style.marginLeft = '10px'

        image.classList.add('image')

        document.querySelector('.block').append(image)
    })
}