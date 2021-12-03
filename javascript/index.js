import users from "../jsondata/cardDetails.js"

users.map(user => {
    return document.querySelector('#cards').innerHTML += `
        <div id='card'  class="bg-white rounded shadow w-full">
            <div class="flex flex-col">
                <img src=${user.img} alt="profile" class="w-full rounded shadow h-72 object-cover">
                <div class="space-y-2 py-2 px-3">
                    <div class="flex flex-col space-y-1">
                        <p class="text-sm font-medium">${user.name}</p>
                        <p class="text-xs text-gray-600">${user.niche}</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-sm font-medium">From &#8358; ${user.price}</p>
                    </div>
                </div>
            </div>
        </div>
    `
});


let cards = document.querySelector('#cards');
let usersPage = Math.ceil(users.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203

// Mobile view
let mobileView = window.matchMedia("(max-width: 768px)");
if(mobileView.matches){
    movePer = 50.36;
    maxMove = 504
} 

let rightMover = () => {
    l = l  + movePer;
    if(cards) {
        l = 0
    }
    for(const i of card) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }
}

span[1].onclick = () => {
    rightMover();
}