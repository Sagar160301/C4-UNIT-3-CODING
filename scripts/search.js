


async function storeSearchterm(term) {

    let res = await fetch(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`)
    // let res = await url;
    let data = await res.json()
    return data


}

const appendData = (data, main) => {

    data.map(el => {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", el.urlToImage)

        let headlines = document.createElement("h4")
        headlines.innerText = el.title

        let desc = document.createElement("p")
        desc.innerText = el.description

        div.append(image, headlines, desc)

        main.append(div)
    })


}

export { storeSearchterm, appendData }