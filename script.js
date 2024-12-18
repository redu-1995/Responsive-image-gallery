const Imagedata = [
  {
    title:"Ethiopian Flag",
    description:" Ethiopia National colorful flag of Ethiopia under cloudy sky",
    url:"images/pexels-kelly-.jpg"
  },
  {
    title:"White High-rise Building in Front of Street",
    description:"Addis Ababa,Ethiopia",
    url:"images/pexels-beakaly.jpg"
  },
  {
    title:"Drone Shot of Lake",
    description:"Afar Zone 3, አፋር, Ethiopia",
    url:"images/pexels-daggy-j.jpg"
  },
  {
    title:"Ethiopia Bronze Sculptures on Yekatit 12 Monument in Addis Ababa Ethiopia",
    description:"Addis Ababa, Addis Ababa, ",
    url:"images/pexels-abuti-engidashet.jpg"
  },
  {
    title:"Backyard leaves",
    description:"Northern Kentucky University, Highland Heights, United States <br>  Published on August 15, 2017",
    url:"images/tanalee-youngblood.jpg"
  },
  {
    title:"Sunset",
    description:"Bishoftu, Ethiopia <br> Published on July 25, 2022  <br> NIKON CORPORATION, NIKON D3400",
    url:"images/diana-yohannes-.jpg"
  },
  {
    title:"Erta Ale",
    description:"Erta Ale, Ethiopia <br>  Published on January 21, 2018 <br>  Canon, EOS 400D DIGITAL",
    url:"images/marc-szeglat.jpg"
  },
  {
    title:"Ethiopian mountain road",
    description:"Ethiopia  <br> Published on January 6, 2017 <br>  Canon, EOS 5D Mark II",
    url:"images/clay-knight.jpg"
  },
  {
    title:"Ethiopian Coffee",
    description: "Traditional cup of Ethopian coffee served with Rue leaf",
    url:"images/ethiopian_coffee.jpg"
  },
  {
   title:"Ethiopian Enjera Meal",
   description:"Ye feseg beyaynetu ethiopian traditional dish",
   url: "images/enjera_meal.jpg"
  },
  {
    title: "Ethiopian Orthodox Church",
    description: "Orthodox cross on top of Ethiopian church in Tigray region",
    url: "images/ethiopian_orthodox_church.jpg"
  },{
    title: "Ethiopian map",
    description:"old map showing ethiopia and unexplored region",
    url:"images/ethiopian_map.jpg"
  }
]

function displayImage(images){
   const photos = document.getElementById("container");
   images.forEach(image => {
    const item = document.createElement('div');
    item.className = "image";
    const title = document.createElement('div');
    title.classname = "title";
    item.innerHTML = `
    <a href = "${image.url}" data-lightbox = "gallery" data-title = "${image.title}"> 
    <img src = "${image.url}" alt = "${image.title}"> </a>`

    title.innerHTML = `
    <div class="image_info">
    <p id ="title">${image.title}</p>
    <p id ="description">${image.description}</p>
    </div>
    
    `
    photos.appendChild(item);
    item.appendChild(title);
   });
}
displayImage(Imagedata);


 