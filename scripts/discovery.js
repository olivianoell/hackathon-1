const discoveryEl = document.querySelector(".discovery-container");

async function getDiscovery() {
  try {
    // const url = "https://images-api.nasa.gov/search?media_type=image";
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

function handleSelection(event) {
  const selectedOption = event.target.value;
  alert(`You selected: ${selectedOption}`);
  // Add any additional functionality here
}

/*const imagesList = response.data;
for (let i = 0; i < data.length; i++) {
  if (imagesList.camera.name === menuList.camera.name) {
    imagesList.push(data[i]);
  }
}
console.log(imagesList); */

/*FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM, PANCAM, MINITES*/

// Sample array of objects

// Filtering based on multiple
// properties using a for loop

/*arr.filter(function (item) {
  return item.name === "nick";
}); */

/*async function getData() {
  const response = await fetch("http://34.198.81.140/attendance.json");
  const myData = await response.json();

  let startDate = "Feb 1, 2020";
  let endDate = "Feb 29, 2020";
  let result = myData.filter((data) => {
    return (
      // Convert all date values to javascript dates using new Date(value)
      // Get the number of milliseconds using getTime()
      // Compare the milliseconds values
      new Date(data.date).getTime() >= new Date(startDate).getTime() &&
      new Date(data.date).getTime() <= new Date(endDate).getTime()
    );
  });
  console.log(result);
}
getData(); */

const cameras = [
  { value: "FHAZ", text: "Front Hazard Avoidance Camera" },
  { value: "RHAZ", text: "Rear Hazard Avoidance Camera" },
  { value: "MAST", text: "Mast Camera" },
  { value: "CHEMCAM", text: "Chemistry and Camera Complex" },
  { value: "MAHLI", text: "Mars Hand Lens Imager" },
  { value: "MARDI", text: "Mars Descent Imager" },
  { value: "NAVCAM", text: "Navigation Camera" },
  { value: "PANCAM", text: "Panoramic Camera" },
  { value: "MINITES", text: "Miniature Thermal Emission Spectrometer" },
];

const cameraOption = document.createElement("Option");
const cameraHeading = document.createElement("h2");

cameraOption.classList.add("camera-option");
cameraHeading.classList.add("camera-heading");

cameraOption.innerHTML =
  '<option value="" disabled selected> Choose a camera </option>';

cameraOption.addEventListener("click", () => {
  if (cameraOption.childElementCount.length === 1) {
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.value;
      option.text = camera.text;
      cameraOption.appendChild(option);
    });
  }
});

discoveryEl.appendChild(cameraHeading);
discoveryEl.appendChild(cameraOption);

 async function getPhotos((camera) {
  const url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=BC8hUtjeoPKPAE8m7Ujuf3byPIsFnMeu4gT4rs50";
  try {
    const response = await axios.get(url);
    if (response.data?.photos?.length) {
      let photosHTML = "";
      const photos = response.data.photos.slice(0, 21);
      for (let i = 0; i < photos.length; i++) {
        photosHTML += '<img src="${photos[i].img_src}"/>';
      }
    } else {
      discoveryEl.innerHTML = "no photos";
    }
  } catch (error) {
    console.log("errorrrr", error);
  }
 }

// function createDropdown() {
//   const dropdown = document.createElement("select");

//   cameras.forEach((item) => {
//     const option = document.createElement("option");
//     option.value = item.value;
//     dropdown.appendChild(option);
//   });
// }

// createDropdown();
