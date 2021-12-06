import users from "../jsondata/cardDetails.js"

users.map(user => {
    return document.querySelector('#cards').innerHTML += `
        <div id='card' class="w-full card controller1list h-96 max-h-96 rounded">
            <div class="flex flex-col">
                <img src=${user.img} alt="profile" id='userImg' class="rounded w-full h-60 max-h-60 object-cover">
                <div class="space-y-1 card-details">
                    <div class="flex flex-col">
                        <p class="font-medium">${user.name}</p>
                        <p class="text-gray-600">${user.niche}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-base">From &#8358;<span class="text-base">${user.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
});


users.map(user => {
    return document.querySelector('#actors').innerHTML += `
        <div id='card' class="w-full card controller2list h-96 max-h-96 rounded">
            <div class="flex flex-col">
                <img src=${user.img} alt="profile" id='userImg' class="rounded w-full h-60 max-h-60 object-cover">
                <div class="space-y-1 card-details">
                    <div class="flex flex-col">
                        <p class="font-medium">${user.name}</p>
                        <p class="text-gray-600">${user.niche}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-base">From &#8358;<span class="text-base">${user.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
});


users.map(user => {
    return document.querySelector('#creators').innerHTML += `
        <div id='card' class="w-full card controller3list h-96 max-h-96 rounded">
            <div class="flex flex-col">
                <img src=${user.img} alt="profile" id='userImg' class="rounded w-full h-60 max-h-60 object-cover">
                <div class="space-y-1 card-details">
                    <div class="flex flex-col">
                        <p class="font-medium">${user.name}</p>
                        <p class="text-gray-600">${user.niche}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-base">From &#8358;<span class="text-base">${user.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
});

users.map(user => {
    return document.querySelector('#musicians').innerHTML += `
        <div id='card' class="w-full card controller4list h-96 max-h-96 rounded">
            <div class="flex flex-col">
                <img src=${user.img} alt="profile" id='userImg' class="rounded w-full h-60 max-h-60 object-cover">
                <div class="space-y-1 card-details">
                    <div class="flex flex-col">
                        <p class="font-medium">${user.name}</p>
                        <p class="text-gray-600">${user.niche}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-base">From &#8358;<span class="text-base">${user.price}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
});

// let span = document.querySelectorAll('#span');
// let card = document.querySelectorAll('#card');
// let card_page = Math.ceil(card.length/4);
// let l = 0;
// let movePer = 25.34;
// let maxMove = 203;
// // mobile_view	
// let mob_view = window.matchMedia("(max-width: 768px)");
// if (mob_view.matches){
//     movePer = 50.36;
//     maxMove = 504;
// }

// let mob_view1 = window.matchMedia("(max-width: 500px)");
// if (mob_view1.matches){
//     movePer = 75.38;
//     maxMove = 1005;
// }

// let right_mover = ()=>{
//     l = l + movePer;
//     if (card == 1){l = 0; }
//     for(const i of card)
//     {
//         if (l > maxMove){l = l - movePer;}
//         i.style.left = '-' + l + '%';
//     }

// }
// let left_mover = ()=>{
//     l = l - movePer;
//     if (l<=0){l = 0;}
//     for(const i of card){
//         if (card_page>1){
//             i.style.left = '-' + l + '%';
//         }
//     }
// }
// span[1].onclick = ()=>{right_mover();}
// span[0].onclick = ()=>{left_mover();}