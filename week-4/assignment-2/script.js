const div = document.querySelector("div");

async function ajax(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function render(data) {
  console.log(data);
  const products = data
    .map((product) => {
      return `<section>
        <h1>${product.name}</h1>
        <h2>price: ${product.price}</h2>
        <p>${product.description}</p>
    </section>`;
    })
    .join("");
  div.innerHTML += products;
}

const url = "http://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
