let posts = [
    {
        "logo": "./img/lunapic.png",
        "profilname": "lunasky_24",
        "location": "Bavaria",
        "image": "./img/lunapic.png",
        "likeicon": "./img/icons8-love-24.png",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 32,
        "isliked":false,
        "profilnamecomment":"Heute habe ich das schöne Wetter genossen",
        "comments": ['Der Schönste Hund!🥰','Süß!'],
        "usercomment":[],
        "posttime":"Vor ein paar Sekunden",
    },
    {
        "logo": "./img/jpbild.png",
        "profilname": "jp201199",
        "location": "Venedig,Italien",
        "image": "./img/venedig.jpg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 80,
        "isliked":false ,
        "profilnamecomment":"Venedig ist so schön!",
        "comments": ['Muss da unbedingt auch mal hin...!'],
        "usercomment":[],
        "posttime":"Vor 2 Stunden",
    },
    {
        "logo": "./img/IMG_2124.JPG",
        "profilname": "marcovornamealsnachname",
        "location": "Los Angeles,USA",
        "image": "./img/venicebeach.jpeg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 55,
        "isliked":false,
        "profilnamecomment":"Morgen gehts von Los Angeles über die Route1 nach San Fransico",
        "comments": ['Muss da unbedingt auch mal hin...!'],
        "usercomment":[],
        "posttime":"Vor 6 Stunden",
    },
    {
        "logo": "./img/bildvonmir.png",
        "profilname": "christian1208",
        "location": "Hof,Deutschland",
        "image": "./img/javascriptlearning.jpg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 57,
        "isliked":false,
        "profilnamecomment":"Bin jetzt seit 3 Monaten bei der Developer Akademie und lerne gerade JavaScript!",
        "comments": ['Ist das kompliziert?😀'],
        "usercomment":[],
        "posttime":"Vor 10 Stunden",
    },
    {
        "logo": "./img/bildvonmir.png",
        "profilname": "christian1208",
        "location": "Toskana,Italien",
        "image": "./img/toskana.jpeg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 90,
        "isliked":false,
        "profilnamecomment":"Einer der schönsten Orte auf der Welt",
        "comments": ['Sieht ja echt mega aus!'],
        "usercomment":[],
        "posttime":"Vor 18 Stunden",
    },
    {
        "logo": "./img/Bildschirmfoto 2024-02-23 um 19.29.55.png",
        "profilname": "lea_schuberth",
        "location": "Tschechien",
        "image": "./img/coffee.jpeg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 120,
        "isliked":false,
        "profilnamecomment" :"Entspannt mal nen Kaffee trinken ☕️",
        "comments": ['Lecker!'],
        "usercomment":[],
        "posttime":"Vor 2 Tagen",
    },
    {
        "logo": "./img/ab6761610000e5eb888dbb6f0c381220ac2dc6b7.jpeg",
        "profilname": "While She Sleeps",
        "location": "Sheffield",
        "image": "./img/While-She-sLeeps-Sleeps-Society-Album-Cover-2020.jpg",
        "anotherImage": "./img/ab6761610000e5eb092b3d95c02ad9d1675f65ba.jpeg",
        "currentImage": "./img/While-She-sLeeps-Sleeps-Society-Album-Cover-2020.jpg",
        "likeicon": "./img/likeicon.webp",
        "commenticon":"./img/plaudern.png",
        "shareicon":"./img/papierflieger.png",
        "safeicon":"./img/lesezeichen.png",
        "likes": 2342,
        "isliked":false,
        "profilnamecomment" :"Check out our new album. Sleeps Society out",
        "comments": ['Nice!'],
        "usercomment":[],
        "posttime":"Vor 30 Minuten"
    }
];

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += `
            <div class="postheader">
                <div class="postheaderinnerdiv">
                    <img class="profillogo" src="${post.logo}">
                    <div class="postdiv">
                        <h3 class="profilname">${post.profilname}</h3>
                        <span class="location">${post.location}</span>
                    </div>
                </div>
            </div>
        `;


        
        if (post.anotherImage) {
            content.innerHTML += `
                <div class="postpic-container">
                    <button class="arrow left" onclick="changeImage(${i}, 'prev')">&lt;</button>
                    <img class="postpic" src="${post.currentImage}">
                    <button class="arrow right" onclick="changeImage(${i}, 'next')">&gt;</button>
                </div>
            `;
        } else {
            content.innerHTML += `
                <img class="postpic" src="${post.image}">
            `;
        }

        content.innerHTML += `
            <div class="contenticondiv">
                <div class="contenticondivwithoutsafeicon">
                    <img id="likebutton${i}" onclick="likebutton(this, ${i})" class="likeicon" src="${post['likeicon']}">
                    <img class="commenticon" src="${post.commenticon}">
                    <img class="shareicon" src="${post.shareicon}">
                </div>
                <img class="safeicon" src="${post.safeicon}">
            </div>
        `;

        content.innerHTML += `
            <div class="contentlikes">
                <b class="likes"><span class="gefällt">Gefällt</span>${post.likes}<span class="mal">Mal</span></b>
                <div class="contentprofilename">
                    <span><b>${post.profilname}</b>: ${post.profilnamecomment}</span>
                </div>
            </div>
        `;

        content.innerHTML += `
            <div class="comments">
                <span><b class="user1">User:</b>${post.comments}</span>
                <div id="usercomment${i}"></div>
            </div>
        `;

        content.innerHTML += `
            <div class="posttime">
                <span>${post.posttime}</span>
            </div>
        `;

        content.innerHTML += `
            <div class="addcommentdiv">
                <textarea class="addcomment" placeholder="Kommentar hinzufügen" id="textareafield${i}"></textarea>
                <button onclick="addComment(${i})" class="post-button">Posten</button>
            </div>
        `;
        const likeButton = document.getElementById(`likebutton${i}`);
        if (post['isliked']) {
            likeButton.src = "./img/likeicon.webp"; 
            likeButton.classList.remove('hearticonred'); 
        } else {
            likeButton.src = "./img/hearticonred.png"; 
            likeButton.classList.add('hearticonred');
        }

        let usercomment = document.getElementById(`usercomment${i}`);

        for (let j = 0; j < post['usercomment'].length; j++) {
            const comment = post['usercomment'][j];
            usercomment.innerHTML += `<div class="usercomment"><b class="userpadding">User:</b>${comment}</div>`;
        }
    }
}

/** 
 * Add a new comment and push it to the usercomment in the posts array 
*/ 

function addComment(i) {
    let input = document.getElementById(`textareafield${i}`).value;
    posts[i].usercomment.push(input);
    render();
    saveUserCommentsToLocalStorage();
    
}

/**
 * Saves all user comments from posts to local storage.
 * Uses `posts.map` to extract the `usercomment` property from each post.
 */

function saveUserCommentsToLocalStorage() {
    const userCommentsJSON = JSON.stringify(posts.map(post => post['usercomment']));
    localStorage.setItem('userComments', userCommentsJSON);

}

/**
 * load safed user comments from local storage and push it in the usercomment in posts array
 */

function loadUserCommentsFromLocalStorage() {
    const userCommentsJSON = localStorage.getItem('userComments');
    if (userCommentsJSON) {
        const userCommentsArray = JSON.parse(userCommentsJSON);
        userCommentsArray.forEach((userComments, index) => {
            posts[index]['usercomment'] = userComments;
        });
    }
}

function likebutton(element, i) {
    const post = posts[i];
    console.log(`Vorher: likes=${post.likes}, isliked=${post.isliked}`);

    if (post['isliked']) {
        post['likes'] -= 1;
        element.src = "./img/likeicon.webp"; 
        element.classList.remove('hearticonred'); 
    } else {
        post['likes'] += 1;
        element.src = "./img/hearticonred.png"; 
        element.classList.add('hearticonred'); 
    }

    post['isliked'] = !post['isliked']; 
    console.log(`Nachher: likes=${post.likes}, isliked=${post.isliked}`);

    render(); 
    saveLikesToLocalStorage(); 
}

function saveLikesToLocalStorage() {
    let likesToSave = posts.map(insta => {
        return {
            likes: insta.likes,
            isliked: insta.isliked,
        };
    });

    let likesToSaveJSON = JSON.stringify(likesToSave);
    localStorage.setItem('likesData', likesToSaveJSON);
    console.log(likesToSaveJSON);
}

function loadLikesFromLocalStorage() {
    let likesFromLocalStorageJSON = localStorage.getItem('likesData');

    if (likesFromLocalStorageJSON) {
        let likesFromLocalStorage = JSON.parse(likesFromLocalStorageJSON);
        likesFromLocalStorage.forEach((likeData, index) => {
            posts[index].likes = likeData.likes;
            posts[index].isliked = likeData.isliked;
        });
    }
}

function subscribe(element){
    if (element.innerHTML === 'Abonnieren') {
        element.innerHTML = 'Abonniert';
        element.style.color = 'black';
    } else {
        element.innerHTML = 'Abonnieren';
        element.style.color = '#03A9F4';
    }
}

function changeImage(postIndex, direction) {
    const post = posts[postIndex];
    const nextImage = direction === 'next' ? post.anotherImage : post.image;
    post.currentImage = post.currentImage === nextImage ? post.image : nextImage;
    render();
}

loadLikesFromLocalStorage();

