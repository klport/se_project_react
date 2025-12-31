export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://media.istockphoto.com/id/1945303497/photo/front-and-back-views-of-a-man-wearing-a-black-oversized-hoodie-with-blank-space-ideal-for-a.jpg?s=1024x1024&w=is&k=20&c=pH8RIdo8K-VIqPNlmfXeVj1Ghy3oqqaNOA9Q-FO36dU=",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://media.istockphoto.com/id/505623612/photo/leather-jacket.jpg?s=2048x2048&w=is&k=20&c=qrJtiMK4D7nmQRTOgzdVZvzUzMzAr_LsDv0aYthY4Lg=",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://media.istockphoto.com/id/155096664/photo/tennis-shoes.jpg?s=2048x2048&w=is&k=20&c=_bgCtzxONMVlpsE9EXQG8QNoF4qOyn39K_lUntxKolA=",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://media.istockphoto.com/id/1124442408/photo/leather-jacket-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=fBfdhwFKJ5r66quyMg3UmwDFaxJbdbphyRU1Rnirg-k=",
  },

  {
    _id: 6,
    name: "Pants",
    weather: "cold",
    link: "https://media.istockphoto.com/id/470984912/photo/mens-jeans.jpg?s=1024x1024&w=is&k=20&c=KVpdfQABMxwZ1o0azgX8FAHTzP0G823urlJVGCEpUh8=",
  },
];

export const coordinates = {
  latitude: 34.1478,
  longitude: -118.1445,
};

export const apiKey = "9d1c21a75b0fec61599f98fcc6be82e9";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.whattowearproject.twilightparadox.com"
    : "http://localhost:3001";
