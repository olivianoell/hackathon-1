const discoveryEl = document.querySelector(".discovery-container");

async function getDiscovery() {
  try {
    const url =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BC8hUtjeoPKPAE8m7Ujuf3byPIsFnMeu4gT4rs50";
    const response = await axios.get(url);
    console.log(response.data);
    discoveryEl.innerText = response.data.discovery;
  } catch (error) {
    console.log(error);
  }
}

getDiscovery();


// Get references to the dropdown menu and result display
const cameraMenu = document.getElementById("camera-menu");
const result = document.getElementById("result");

// Add an event listener to handle user selection
cameraMenu.addEventListener("change", () => {
  const selectedValue = cameraMenu.value;
  result.textContent = `You selected: ${selectedValue}`;
});






// function handleSelection(event) {
//   const selectedOption = event.target.value;
//   alert(`You selected: ${selectedOption}`);
// }

// const cameras = [
//   { value: "FHAZ", text: "Front Hazard Avoidance Camera" },
//   { value: "RHAZ", text: "Rear Hazard Avoidance Camera" },
//   { value: "MAST", text: "Mast Camera" },
//   { value: "CHEMCAM", text: "Chemistry and Camera Complex" },
//   { value: "MAHLI", text: "Mars Hand Lens Imager" },
//   { value: "MARDI", text: "Mars Descent Imager" },
//   { value: "NAVCAM", text: "Navigation Camera" },
//   { value: "PANCAM", text: "Panoramic Camera" },
//   { value: "MINITES", text: "Miniature Thermal Emission Spectrometer" },
// ];

// const cameraOption = document.createElement("select");
// const cameraHeading = document.createElement("h2");

// cameraOption.classList.add("camera-option");
// cameraHeading.classList.add("camera-heading");


// cameraOption.addEventListener("click", () => {
//   if (cameraOption.childElementCount.length === 1) {
//     cameras.forEach((camera) => {
//       const option = document.createElement("option");
//       option.value = camera.value;
//       option.text = camera.text;
//       cameraOption.appendChild(option);
//     });
//   }
// });

// cameraOption.addEventListener("change", handleSelection);

// discoveryEl.appendChild(cameraHeading);
// discoveryEl.appendChild(cameraOption);

//  async function getPhotos(camera) {
//   const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=BC8hUtjeoPKPAE8m7Ujuf3byPIsFnMeu4gT4rs50`;
//   try {
//     const response = await axios.get(url);
//     if (response.data?.photos?.length) {
//       let photosHTML = "";
//       const photos = response.data.photos.slice(0, 21);
//       for (let i = 0; i < photos.length; i++) {
//         photosHTML += `<img src="${photos[i].img_src}" alt="Photo from ${camera}" />`;
//       }
//       discoveryEl.innerHTML += photosHTML;  
//     } else {
//       discoveryEl.innerHTML += "no photos";
//     }
//   } catch (error) {
//     console.log("errorrrr", error);
//   }
// }

//  cameraOption.addEventListener("change", (event) => {
//   const selectedCamera = event.target.value;
//   if (selectedCamera) {
//     getPhotos(selectedCamera);
//   }
// });