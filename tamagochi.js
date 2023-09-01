function Refresh() {
    location.reload()
}

function bytteBilde1() {
    blankAll();
    console.log("FEED")
    document.getElementById('pinguchar').innerHTML = /*HTML*/ `
<div>
<img class="img" src="img/Pengu fish.png" style="height: 80vh"/>
</div>
`;
}
function bytteBilde2() {
    blankAll();
    console.log("PET")
    document.getElementById('pinguchar').innerHTML = /*HTML*/ `
<div>
<img class="img" src="img/badetid.png" style="height: 80vh"/>
</div>
`;
}
function bytteBilde3() {
    blankAll();
    console.log("PLAY")
    document.getElementById('pinguchar').innerHTML = /*HTML*/`
<div>
<img src="img/PINGU_FOOTBALL_03.png" style="height: 80vh" />
</div>
`;
}
function bytteBilde4() {
    blankAll();
    console.log("CHILL")
    document.getElementById('pinguchar').innerHTML = /*HTML*/ `
<div>
<img class="img" src="img/pejng.png" style="height: 80vh"/>
</div>
`;
}
function bytteBilde5() {
    blankAll();
    console.log("DNF")
    document.getElementById('pinguchar').innerHTML = /*HTML*/ `
<div>
<img class="img" src="img/benjamin buff pengu.png" style="height: 80vh"/>
</div>
`;
}

function blankAll() {
    document.getElementById('pinguchar').innerHTML = '';
}

// let pics = [
//     'src("img/badetid.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146726922064240720/Skjermbilde_2023-08-31_104226-removebg-preview.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146727056156139600/Skjermbilde_2023-08-31_104151-removebg-preview.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146726237637705759/PixCut-removebg_thumbnail.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146723419258376282/pinguPlay_thumbnail.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146723419531001867/pinguT.png")',
//     'url("https://cdn.discordapp.com/attachments/1139484586720628879/1146723419757481994/Skjermbilde_2023-08-31_095145_thumbnail.png")',
// ];

// let pictures = document.getElementById('thisthing');

// function showImage() {
//     let randomPingu = Math.floor(Math.random() * pics.length);
//     let image = pics[randomPingu];
//     pictures.style.backgroundImage = image;
// }

// setInterval(showImage, 1000);


$(function () {
    var $winHeight = $(window).height()
    $('.container').height($winHeight);
});