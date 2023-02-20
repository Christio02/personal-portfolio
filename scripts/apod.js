
const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const urlFetch = "https://api.nasa.gov/planetary/apod?api_key=iY5KEyYHw0uWTWSXIiVJynr95pdpR1zl51OuzYUa&date=" + date;

const divSkills = document.getElementById("skills");

fetch(urlFetch)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.url;
        const title = data.title;
        const apodDate = data.date;
        
        // display APDD image on website
        const image = document.createElement('img');
        image.src = imageUrl;
        divSkills.appendChild(image);

        // add image text
        const titleText = document.createElement('p');
        titleText.innerHTML = title;
        titleText.style.fontStyle = "italic";
        divSkills.appendChild(titleText);

        // add date
        const dateText = document.createElement('p');
        dateText.innerHTML = apodDate;
        divSkills.appendChild(dateText);

    })
    .catch(error => {
        console.error("Error fetching APOD data ", error);
    });