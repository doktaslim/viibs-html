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


let span = document.querySelectorAll('#span');
let card = document.querySelectorAll('#card');
let card_page = Math.ceil(card.length/4);
console.log(card_page);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches){
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = ()=>{
    l = l + movePer;
    if (card == 1){l = 0; }
    for(const i of card)
    {
        if (l > maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';
    }

}
let left_mover = ()=>{
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of card){
        if (card_page>1){
            i.style.left = '-' + l + '%';
        }
    }
}
span[1].onclick = ()=>{right_mover();}
span[0].onclick = ()=>{left_mover();}