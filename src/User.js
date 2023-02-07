class User{

    constructor(userData) {
        this.gender = userData.gender;
        this.title = userData.title;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.city = userData.city;
        this.country = userData.country;
        this.age = userData.age;
        this.email = userData.email;
        this.picture = userData.picture;
        this.here = false;//this.isHere();
        this.userElement = this.#generateUserElement();
    }

// isHere() {
//     document.querySelector("main").addEventListener("click", (e) => {
//         if(this.here === false) {
//             this.here = true;
//         } else {
//             this.here = false;
//         }
//     })
// }

    render() {
        document.querySelector("main").insertAdjacentHTML("afterbegin", this.userElement);
        return this;
    }
    
    #generateUserElement() {
       
        // const userContainer = document.createElement("div");
        // userContainer.dataset.present = this.#here;
        // userContainer.classList.add("user");

        // const img = document.createElement("img");
        // img.src = this.picture;

        // const infoElement = document.createElement("div");
        // const infoInterior = `
        // <h1>${this.title} ${this.firstName} ${this.lastName}</h1>
        // <p>${this.age} years old</p>
        // <p>${this.city}, ${this.country}</p>
        // `;

        // const mailElement = document.createElement("a");
        // mailElement.href = `"mailto:${this.email}"`;
        // const mailInterior = `<span class="mail">✉️</span>`;

        // userContainer.append(img);
        // userContainer.append(infoElement);
        // infoElement.insertAdjacentHTML("afterbegin", infoInterior);
        // userContainer.append(mailElement);
        // mailElement.insertAdjacentHTML("afterbegin", mailInterior);

        // return userContainer;

         const userElement = `
        <div class="user" data-present="false">
		    <img src="${this.picture}">
		    <div class="user--info">
				<h1>${this.title} ${this.firstName} ${this.lastName}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		    </div>
		        <a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		        </a>
        </div>
        `
        return userElement;
    }
}

export default User;