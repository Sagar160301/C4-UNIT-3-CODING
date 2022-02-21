async function apiCall(url) {


    //add api call logic here
    let res = await url;
    let data = await res.json()
    return data


}


function appendArticles(articles, main) {

    articles.map(el => {
        let div = document.createElement("div")
        div.addEventListener("click", () => {
            localStorage.setItem("article", JSON.stringify(el))
            window.location.href = "news.html"
        })

        let image = document.createElement("img")
        image.setAttribute("src", el.urlToImage)

        let head = document.createElement("h4")
        head.innerText = el.title

        div.append(image, head)
        main.append(div)
    })
    //add append logic here

}

export { apiCall, appendArticles }