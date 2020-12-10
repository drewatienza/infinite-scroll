
// Unsplash API
const count = 10;
const apiKey = 'uBqpE-QzSCmyS6f5W_rGlO54z_2yt8A5DUIoK1blzjA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();