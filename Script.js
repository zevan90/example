
// let json_url = "all.json";

// fetch(json_url).then(Response => Response.json())
//     .then((data) => {
//         data.forEach((ele) => {
//             let { Title, Poster } = ele;
//             let card = document.createElement('a');
//             card.classList.add('card');
//             card.innerHTML = `
//          <img src="${Poster}" alt="">
//            <h2 class="text">${Title}</h2>
//          `
//             //  cards.appendChild(card);

//             document.querySelector(".cards").appendChild(card)

//         });
//     });

    let json_url = "all.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele) => {
            let { Title, Poster,} = ele;
            let cleanTitle = Title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="./pages/${cleanTitle}.html">

            <img src="${Poster}" alt="">
              <h2 class="text">${Title}</h2>
        </a>
         `
            //  cards.appendChild(card);

            document.querySelector(".cards").appendChild(card)

        });
    });

// --------------------------------------------------------------------------
// let json_url = "test.json";

// fetch(json_url).then(Response => Response.json())
//     .then((data) => {
//         data.forEach((ele) => {
//             let { name, url } = ele;
//             let card = document.createElement('a');
//             card.classList.add('card');
//             card.innerHTML = `
//          <img src="${url}" alt="">
//            <h2 class="text">${name}</h2>
//          `
//             //  cards.appendChild(card);

//             document.querySelector(".cards").appendChild(card)

//         });
//     });

// function createCard(thumbnail, text) {

//     let html = `<div class="image">
//             <img src="${thumbnail}" alt="">
//             <h2 class="text">${text}</h2>
//         </div>
//     </div>`

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
// }

// createCard("k.png", "This is another title")
// createCard("k.png", "This is another title")





