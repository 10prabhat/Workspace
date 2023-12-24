function createCard(title,cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000000) {
    viewStr = views / 1000 + "K";
  } else if (views > 1000000 && views < 1000000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 10000000000 + "B";
  }

  let html = `<div class="card">
    <div class="image">
      <img
        src="${thumbnail}"
        alt=""
        srcset=""
      />
      <div class="capsule">${duration}</div>
    </div>

    <div class="text">
      <h2>${title}</h2>

      <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
  </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
for(let i =0;i<=10;i++){

createCard(
  "Hey My name is Prabhat Bishwakarma",
  "Prabhat BK",
  100000000000,
  10,
  "10:00",
  "https://i.ytimg.com/vi/j9qGmO8Yy-Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB61mkAI6ilWflqmnQWRIjKHR5F6A"
);
}
    
