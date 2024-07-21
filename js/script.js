let images =[
    {url: "luffy.png",
    type: "ally",
    captain_name: "luffy"},
    {url: "ace.png",
    type: "ally",
    captain_name: "Ace"},
    {url: "boa.png",
    type: "ally",
    captain_name: "Boa Hancock"},
    {url: "rayleigh.png",
    type: "ally",
    captain_name: "Silver Rayleigh"},
    {url: "sabo.png",
    type: "ally",
    captain_name: "Sabo - Revolutionary Army's chief"},
    {url: "shanks.png",
    type: "ally",
    captain_name: "Shanks"},
    {url: "torao.png",
    type: "ally",
    captain_name: "Trafalgar Law"},
    {url: "kaido.png",
    type: "enemy",
    captain_name: "Kaido"},
    {url: "bigmom.png",
    type: "enemy",
    captain_name: "Big Mom"},
    {url: "mihawk.png",
    type: "enemy",
    captain_name: "Mihawk"},
    {url: "marshall.png",
    type: "enemy",
    captain_name: "Marshall"},
];

let konten_el = document.getElementById("konten-holder");

const display = (arr = images) => {
    konten_el.innerHTML = "";
  
    arr.forEach(images => {
      konten_el.innerHTML += `
        <div class="card col-md-3">
          <div class="card-body">
          <img src="images/${images.url}" class="card-img-top" alt="Profile Images">
          <h3>${images.captain_name}</h3>
          </div>
        </div>
      `
    })
  }
  display();

   function show_all() {
    display();
  }  

function show_counterparts(cType) {
    let filtered_images = images.filter(images => images.type === cType);
    // console.log(filtered_images);

    konten_el.innerHTML = "";
 
  
    display(filtered_images);
}


