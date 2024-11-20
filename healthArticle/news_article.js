var xhr = new XMLHttpRequest();
var url = "https://newsapi.org/v2/everything?q=apple&from=2024-11-18&to=2024-11-18&sortBy=popularity&apiKey=e2d9737f940c49dfae0d156a447edfe8";

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {
        if (article.source.name !== '[Removed]') {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('h4');
            description.textContent = article.description;

            var content = document.createElement('p');
            content.textContent = article.content;

            //var urlArticle = document.createElement('p');
            //urlArticle.textContent = `<a href="${url}" target="_blank">Visit Example</a>`

            var publishedAt = new Date(article.publishedAt);
            var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            var formattedPublishedAt = publishedAt.toLocaleString('en-US', options);

            var urlArticle = document.createElement('p');
            urlArticle.innerHTML = `<a href="${article.url}" target="_blank">Follow up reading</a>`

            var sourceInfo = document.createElement('p');
            sourceInfo.innerHTML = `${article.source.name} - ${formattedPublishedAt} <br> <a href="${article.url}" target="_blank"> <img src = ${article.urlToImage} alt = "default" width = "600" height = "400" /> </a>`

            var img = document.create




            articleDiv.appendChild(title);
            articleDiv.appendChild(sourceInfo);
            articleDiv.appendChild(description);
            articleDiv.appendChild(content);

            articlesDiv.appendChild(articleDiv);
        }
    });
}

xhr.send();


