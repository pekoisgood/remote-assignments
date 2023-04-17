const wrapper = document.querySelector(".wrapper");
const url = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1";

async function getItems() {
  const res = await fetch(url)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  const items = res
    .map((item) => {
      return `
        <div class="item">  
          <div class="name-container">
            <h2 class="name">${item.name}</h2>  
            <span class="visibility">${
              item.visibility.charAt(0).toUpperCase() + item.visibility.slice(1)
            }</span>
          </div>
          <p class="desc">${item.description}</p>
          <div class="topic-container">${item.topics
            .map((topic) => `<a class="topic">${topic}</a>`)
            .join(" ")}</div>
        </div>
        `;
    })
    .join("");

  wrapper.innerHTML += items;
}

getItems();
