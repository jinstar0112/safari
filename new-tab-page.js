const interests = [
  {
    name: "Himalaya",
    query: "himalaya,mountain",
  },
  {
    name: "Japan",
    query: "japan",
  },
  {
    name: "Australia",
    query: "Australia,wild",
  },
  {
    name: "Grand Canyon",
    query: "grandcanyon",
  },
  {
    name: "Costa Rica",
    query: "costarica,jungle",
  },
];

const randomIndex = Math.round(Math.random() * (interests.length - 1));

document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${interests[randomIndex].query}")`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";
document.querySelector(".headline").innerText = interests[randomIndex].name;
