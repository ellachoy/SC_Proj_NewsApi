console.log('NewsApi')


class News{
    constructor(author, title, description, date, img, content,url){
        this.title = title;
        this.author = author;
        this.description = description;
        this.date = date;
        this.img = img;
        this.content = content;
        this.url = url;
    }
    pushNews(){
        document.querySelector('article').innerHTML +=`
        <section>
            <img src="${this.img}" alt="">
            <h2>${this.title}</h2>
            <p>${this.content}</p>
            <p>${this.date}</p>
            <a href="${this.url}">READ MORE</a>
        </section>`    
    }
}
    fetch(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=67833ec7649a4b6fab36f8b90c9d5bf2`)
    .then(response => response.json())
    .then(data => {console.log(data);

        let newsArticle = data.articles
        console.log(newsArticle);

        newsArticle.forEach(newData => {
            let author = newData.author;
            let date = newData.publishedAt;
            let title = newData.title;
            let description = newData.description;
            let img = newData.urlToImage;
            let content = newData.content;
            let url=newData.url
            console.log(url)

            let newNews1 = new News(author,title,description,date,img,content,url);
           
            newNews1.pushNews()
        })
    })



































