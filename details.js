document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const year = urlParams.get("year");
  const genre = urlParams.get("genre");
  const cast = urlParams.get("cast");
  const director = urlParams.get("director");
  const production = urlParams.get("production");
  const country = urlParams.get("country");
  const duration = urlParams.get("duration");
  const about = urlParams.get("about");
  const img = urlParams.get("img");
  const link = urlParams.get("link");

  document.getElementById(
    "movieTitle"
  ).innerHTML = `<span class="label">Title:</span> <span class="label1">${title}</span>`;
  document.getElementById(
    "movieYear"
  ).innerHTML = `<span class="label">Year:</span> <span class="label1">${year}</span>`;
  document.getElementById(
    "movieGenre"
  ).innerHTML = `<span class="label">Genre:</span> <span class="label1">${genre}</span>`;
  document.getElementById(
    "movieCast"
  ).innerHTML = `<span class="label">Casts:</span> <span class="label1">${cast}</span>`;
  document.getElementById(
    "movieDirector"
  ).innerHTML = `<span class="label">Director:</span> <span class="label1">${director}</span>`;
  document.getElementById(
    "movieProduction"
  ).innerHTML = `<span class="label">Production:</span> <span class="label1">${production}</span>`;
  document.getElementById(
    "movieCountry"
  ).innerHTML = `<span class="label">Country:</span> <span class="label1">${country}</span>`;
  document.getElementById(
    "movieDuration"
  ).innerHTML = `<span class="label">Duration:</span> <span class="label1">${duration}</span>`;
  document.getElementById(
    "movieAbout"
  ).innerHTML = `<span class="label">About:</span> <span class="label1">${about}</span>`;

  document.getElementById("movieImg").src = img;
  document.getElementById("movieImg").alt = title;
  document.getElementById("movieLink").href = link;
});
