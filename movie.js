// document.addEventListener("DOMContentLoaded", () => {
//   const movieList = document.getElementById("movieList");

//   movieList.addEventListener("click", (event) => {
//     const target = event.target;
//     if (target.tagName.toLowerCase() === "a") {
//       const title = target.getAttribute("data-title");
//       const year = target.getAttribute("data-year");
//       const director = target.getAttribute("data-director");
//       const img = target.getAttribute("data-img");
//       const link = target.getAttribute("data-link");

//       const queryParams = new URLSearchParams({
//         title: title,
//         year: year,
//         director: director,
//         img: img,
//         link: link,
//       });

//       window.location.href = `details.html?${queryParams.toString()}`;
//     }
//   });
// });
function showMovieDetails(element) {
  const img = element.getAttribute("data-img");
  const title = element.getAttribute("data-title");
  const genre = element.getAttribute("data-genre");
  const year = element.getAttribute("data-year");
  const cast = element.getAttribute("data-cast");
  const director = element.getAttribute("data-director");
  const production = element.getAttribute("data-production");
  const country = element.getAttribute("data-country");
  const duration = element.getAttribute("data-duration");
  const about = element.getAttribute("data-about");
  // const img = element.getAttribute("data-img");
  const link = element.getAttribute("data-link");

  const queryParams = new URLSearchParams({
    img: img,
    title: title,
    genre: genre,
    year: year,
    cast: cast,
    director: director,
    production: production,
    country: country,
    duration: duration,
    about: about,
    // img: img,
    link: link,
  });

  window.location.href = `details.html?${queryParams.toString()}`;
}
