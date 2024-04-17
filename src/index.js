const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

window.addEventListener("load", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImages = data.message;
      dogImages.forEach((image) => {
        const img = document.createElement("img");
        img.src = image;
        document.getElementById("dog-image-container").appendChild(img);
      });
    });
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.addEventListener("load", () => {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        document.getElementById("dog-breeds").appendChild(li);
      });
    });
});

const dogBreeds = document.getElementById("dog-breeds");

dogBreeds.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});