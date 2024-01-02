const ThatLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

const rPFP = 35

const colors = [ 
  "#03B875", //blue
  "#1869FF", //darkBlue
  "#3B5999", //lightBlue
  "#EA4C89", //pink
  "#F57E00", //orange
  "#BD071D", //red
  "#e807e4" //purple
]

const icons = [
  "img/facebook_icon.png", //facebook
  "img/pinterest_icon.png", //pinterest
  "img/twitter_icon.png", //twitter
  "img/linkedin_icon.png", //linkedin
  "img/github_icon.png", //github
]

const profiles = [
  "img/pfp/nino_chxeidze.jfif", //nino chxeidze
  "img/pfp/lela_wurwumia.jfif", //lela wurwumia
  "img/pfp/guram_sherozia.jfif", //guram sherozia
  "img/pfp/mari_gadelia.jfif", //she a friend
  "img/pfp/cocxali_armidis.jfif", //filmi mainc gavida
  "img/pfp/cotne.jfif", //just cotne
  "img/pfp/mgvdeli_kaci.jfif", //qartveli gei ar arsebobs
  "img/pfp/debili.jfif", //imitoro debilia
  "img/pfp/shevardnadze.jfif" //shevardnadzes ro is uqna
]

for (let i = 1; i <= rPFP; i++) {
    console.log(i, "pictures");
  profiles.push("img/pfp/" + i + ".jpg")
}

console.log(profiles)

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const userDivs = data.map(user => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const randomPFP = profiles[Math.floor(Math.random() * profiles.length)];
      const div = document.createElement('div');
      div.style.backgroundColor = randomColor;
      div.setAttribute("class", "userDiv")
      div.innerHTML = `
      <div class = "card_top">
      <img src = ${randomIcon} class = "randomIcon" style="background-color: ${randomColor}; border-color: ${randomColor};">
      <img src = img/link_icon.png class = "link_icon" style="background-color: ${randomColor}; border-color: ${randomColor};">
      </div>
      <span><img src = ${randomPFP} class = "user_icon"></span>
      <div class = "card_description">
      <h2 class = "userName">${user.name}</h2>
      <p>Catch Phrase: ${user.company.catchPhrase}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website:
      <a href = "#">${user.website}</a></p>
      <div class = "details_icons">
      <img src = img/facebook_icon.png class = "details_icon">
      <img src = img/pinterest_icon.png class = "details_icon">
      <img src = img/twitter_icon.png class = "details_icon">
      <img src = img/linkedin_icon.png class = "details_icon">
      <img src = img/github_icon.png class = "details_icon">
      </div>
      </div>
      `;
      return div;
  });

  const container = document.getElementById('user-container');
  userDivs.forEach(div => container.appendChild(div));
}

getUsers();

setTimeout(() => {

  const userCard = document.querySelectorAll(".userDiv")
  const userView = document.getElementsByClassName("profile_view_background")[0]
  const userViewClose = document.getElementsByClassName("user_close")[0]
  const viewProfileButton = document.getElementsByClassName("view_profile")[0]
  const viewProfileButtonIcon = document.getElementsByClassName("user_button_icon")[0]
  const userCloseIcon = document.getElementsByClassName("user_close_icon")[0]
  const userNameToDisplay = document.getElementsByClassName("username_to_display")[0] 
  const userProfile = document.getElementsByClassName("user_pfp")[0] 
  const userProfileCheck = document.getElementsByClassName("checkIcon")[0] 
  const userProfileImage = document.getElementsByClassName("profilePicture")[0]
  const userDescription = document.getElementsByClassName("user_description")[0] 
  const userText = document.getElementsByClassName("user_name_text")[0] 

  let windowScrollX = 0
  let windowScrollY = 0

//When Any Of The Cards Are Clicked
const cardClicked = function(){
  // console.log("yes")
  console.log(this.getElementsByClassName("userName")[0].innerHTML)
  userNameToDisplay.innerHTML = `${this.getElementsByClassName("userName")[0].innerHTML}`
  userView.style.visibility = "visible"
  userProfileCheck.style.opacity = "0"
  console.log("profile pucture?",this.getElementsByClassName("user_icon")[0].src)
  userProfileImage.src = `${this.getElementsByClassName("user_icon")[0].src}`
  userView.style.opacity = "100"
  windowScrollX = window.scrollX
  windowScrollY = window.scrollY
  window.scrollTo(0, 500);

  //sum animation?
  setTimeout(()=>{
    userProfileCheck.style.opacity = "100"
    userProfileCheck.style.marginBottom = "0px";

    userProfileImage.style.width = "0px"
    userProfileImage.style.height = "75px"

    viewProfileButton.style.opacity = "100"
    userText.style.opacity = "100"
    userDescription.style.opacity = "100"
  }, 200)

  setTimeout(()=>{
    userProfileImage.style.width = "75px"
    userProfileImage.style.height = "75px"
  }, 700)
  
}

//Close Window Button Functions
const userClose = function() {
  userView.style.opacity = "0"
  setTimeout(() => {
    userView.style.visibility = "hidden"
  }, 200)
  window.scrollTo(windowScrollX, windowScrollY);
  userProfileImage.style.width = "0px"
  userProfileImage.style.height = "0px"

  userProfileCheck.style.opacity = "0"
  userProfileCheck.style.marginBottom = "-100px";
  viewProfileButton.style.opacity = "0"
  userText.style.opacity = "0"  
  userDescription.style.opacity = "0"
}

const viewProfile = function() {
  alert("No.")
  window.open(ThatLink)
}


console.log(userView)
console.log(userCard)
console.log(userCard.length)
console.log(document.getElementsByClassName("userDiv")[1])
// console.log(userCard.length)

for(let f = 0; f < userCard.length; f ++){
  userCard[f].addEventListener("click", cardClicked)
  console.log("card", f, "added listener")
}

userViewClose.addEventListener("click", userClose)

viewProfileButton.addEventListener("click", viewProfile)

//View Profile mouse hover and out functions
viewProfileButton.addEventListener("mouseover", function(){
  viewProfileButtonIcon.src = "img/user_selected.png";
})

viewProfileButton.addEventListener("mouseout", function(){
  viewProfileButtonIcon.src = "img/user_default.png";
})

//Close Window mouse hover and out functions
userViewClose.addEventListener("mouseover", function(){
  userCloseIcon.src = "img/close_selected.png"
})

userViewClose.addEventListener("mouseout", function(){
  userCloseIcon.src = "img/close_default.png"
})

}, "700");

