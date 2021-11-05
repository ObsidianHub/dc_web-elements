const form = document.getElementById("form"),
  search = document.getElementById("search"),
  result = document.getElementById("result"),
  more = document.getElementById("more"),
  apiURL = "https://api.lyrics.ovh";

// Search songs by the term from input
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

// Show song, artist and prev-next btns inside the DOM
function showData(data) {
  result.innerHTML = `
    <ul class="songs">
      ${data.data
        .map(
          (song) => `
            <li>
                <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                <button
                    class="btn"
                    data-artist="${song.artist.name}"
                    data-songtitle="${song.title}"
                >
                Get Lyrics</button>
            </li>
            `
        )
        .join("")}
    </ul>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});
