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
