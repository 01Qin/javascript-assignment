document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(tvShow => {
        const article = document.createElement('article');


        const nameHeader = document.createElement('h2');
        nameHeader.textContent = tvShow.show.name;
        article.appendChild(nameHeader);


        const detailsLink = document.createElement('a');
        detailsLink.href = tvShow.show.url;
        detailsLink.textContent = "Link to details";
        detailsLink.target = "_blank";
        article.appendChild(detailsLink);


        const image = document.createElement('img');
        image.src = tvShow.show.image?.medium || 'No Image Available';
        image.alt = tvShow.show.name;
        article.appendChild(image);


        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.show.summary;
        article.appendChild(summaryDiv);

        resultsContainer.appendChild(article);
    });
});