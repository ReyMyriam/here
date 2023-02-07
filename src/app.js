import User from "./user.js";

const getUsersData = async () => {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const data = await response.json();
  return data;
};

const getUsersInfos = async () => {
  const userData = await getUsersData();
  console.log(userData);

  const finalData = userData.results.map((user) => {
    const gender = user.gender;
    const title = user.name.title;
    const firstName = user.name.first;
    const lastName = user.name.last;
    const city = user.location.city;
    const country = user.location.country;
    const age = user.dob.age;
    const email = user.email;
    const picture = user.picture.large;
    return {
      gender: gender,
      title: title,
      firstName: firstName,
      lastName: lastName,
      city: city,
      country: country,
      age: age,
      email: email,
      picture: picture,
    };
  });
  return finalData;
};

const getDataAndRenderUser = async () => {
  try {
    const users = await getUsersInfos();
    console.log(users);
    users.forEach((u) => {
      new User(u).render();
    });
  } catch (e) {
    console.error(e.message);
  }
};

getDataAndRenderUser();

document.querySelector("main").addEventListener("click", (e) => {
  console.log(e.target);
  if(e.target.parentElement.classList.contains("user")) {
    const el = e.target.parentElement.dataset.present
    if (el === "false") {
      el = true; 
    } else {
      el = false;
    };
  } else if(e.target.classList.contains("user")) {
    e.target.dataset.present = true;
  } else if (e.target.parentElement.classList.contains("user--info")){
    const parent = e.target.parentElement;
    const premierParent = parent.parentElement.dataset.present = true;
  };
  
});
