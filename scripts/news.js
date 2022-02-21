


const appendArticles = (el, main) => {


    let image_div = document.createElement("div")
    let details_div = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute("src", el.urlToImage)

    let title = document.createElement("h4")
    title.innerText = `Title : ${el.title}`

    let name = document.createElement("h5")
    name.innerText = `Name : ${el.source.name}`

    let desc = document.createElement("p")
    desc.innerText = `Description : ${el.description}`

    let content = document.createElement("p")
    content.innerText = `Content : ${el.content}`

    let publish = document.createElement("p")
    publish.innerText = `PublishedAt : ${el.publishedAt}`


    image_div.append(image)

    details_div.append(title, name, desc, content, publish)

    main.append(image_div, details_div)

}

export { appendArticles }