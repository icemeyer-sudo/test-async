console.log("A")

function useFetchApi() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
    .then(response => {
        const data = response
        setTimeout(() => {
            writeParahraph(data.title)
        }, 1000)
    })

    const pContainer = document.getElementById("paragraph")

    function writeParahraph (words) {
        pContainer.textContent = words
        console.log("B")
    }
}

useFetchApi()

console.log("C")