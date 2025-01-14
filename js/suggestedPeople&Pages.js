// people you may know
let peopleYouMayKnow = [
    {
        id: 1,
        name: "Harry Potter",
        img: "profilePics/page2.jpg"
    },
    {
        id: 2,
        name: "Tony Stark",
        img: "profilePics/Tony-Stark.jpg"
    },
    {
        id: 3,
        name: "Ronaldo",
        img: "profilePics/cr7.jpg"
    }
];


let peopleContainer = document.querySelector('.people-container');
peopleYouMayKnow.forEach(p =>{
    person = `
        <div class="person" data-profile-id='${p.id}'>
            <img src="${p.img}" alt="Person" class="person-img">
            <div class="person-info">
                <a href=''><h6>${p.name}</h6></a>
            </div>
            <button class='btn btn-primary btn-sm add-friend-btn rounded-pill'>
                <i class="fa-solid fa-user-plus"></i>
            </button>
            </div>`;
    peopleContainer.innerHTML += person;
});

// -------------------------------------------------------------
// suggests pages
let pages = 
[
    {
        id:1,
        name: 'Man United',
        desc: 'Football Team',
        img: 'profilePics/Manchester_United.png'
    },
    {
        id: 2,
        name: 'Elon Musk',
        desc: 'Inventor',
        img: 'profilePics/p2.jpg'
    }

];

let pagesContainer = document.querySelector('.pages-container');
pages.forEach(p =>{
    page = `
        <div class="page" data-page-id='${p.id}'>
            <img src="${p.img}" alt="Page" class="page-img">
            <div class="page-info">
                <a href=''><h6>${p.name}</h6></a>
                <p>${p.desc}</p>
            </div>
            <button class='btn btn-primary btn-sm follow-btn rounded-pill'>
                Follow
            </button>
        </div>`;
    pagesContainer.innerHTML += page;
})
