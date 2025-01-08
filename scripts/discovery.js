const cameras = [
  { value: "FHAZ", text: "Front Hazard Avoidance Camera" },
  { value: "RHAZ", text: "Rear Hazard Avoidance Camera" },
  { value: "MAST", text: "Mast Camera" },
  { value: "CHEMCAM", text: "Chemistry and Camera Complex" },
  { value: "NAVCAM", text: "Navigation Camera" },
];

const discoveryEl = document.querySelector(".discovery-container");
const cameraMenu = document.getElementById("camera-menu");
const photosContainer = document.getElementById("photos-container");

async function getPhotos(camera) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=BC8hUtjeoPKPAE8m7Ujuf3byPIsFnMeu4gT4rs50`;
  console.log("getting photos:", url);
  try {
    const response = await axios.get(url);
    if (response.data?.photos?.length) {
      let photosHTML = "";
      const photos = response.data.photos.slice(0, 6);
      for (let i = 0; i < photos.length; i++) {
        photosHTML += `<img src="${photos[i].img_src}" alt="Photo from ${camera}" />`;
      }
      photosContainer.innerHTML = photosHTML;
    } else {
      photosContainer.innerHTML = "no photos";
    }
  } catch (error) {
    console.log("errorrrr", error);
    photosContainer.innerHTML = "error, failed to load";
  }
}

cameraMenu.addEventListener("change", (event) => {
  const selectedCamera = event.target.value;
  if (selectedCamera) {
    photosContainer.innerHTML = "<p>loading...<p>";
    getPhotos(selectedCamera);
  }
});
