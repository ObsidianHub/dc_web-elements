const imageContainer = document.getElementById("image-container"),
  loader = document.getElementById("loader"),
  count = 5,
  apiKey = "IZhddQ43YLWwCCs0eKNt0dORdeRRIISJHNyoFXRy-Ms",
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let ready = false,
  imagesLoaded = 0,
  totalImages = 0,
  photosArray = [],
  initialLoad = true;

async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhotos();
  } catch (e) {
    console.log(e);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
