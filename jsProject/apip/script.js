const list = document.getElementById("list");
const URL=import.meta.env.VITE_API_URL 
document.getElementById("fetchbtn").addEventListener("click", () => {
  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Fetch Failed");
      }
      return res.json();
    })
    .then((data) => render(data))
    .catch((err) => alert(err.mesaage));
});

document.getElementById("axiosBtn").addEventListener("click", () => {
  axios
    .get(URL)
    .then((res) => render(res.data))
    .catch(() => alert("Axios failed"));
});

function render(posts) {
  list.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerText = post.title;
    list.appendChild(li);
  });
}
