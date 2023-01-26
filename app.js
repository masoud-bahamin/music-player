
let playbtn = document.getElementById('playbtn');
let prevbtn = document.getElementById('prevbtn');
let nextbtn = document.getElementById('nextbtn');
let pausebtn = document.getElementById('pausebtn');
let fivebtn = document.getElementById('fivebtn');
let rate1btn = document.getElementById('rate1btn');
let timeshow = document.getElementById('time');
let display = document.getElementById('display');
let line = document.getElementById('line');
let fileinput = document.getElementById('fileinput');
let addbtn = document.getElementById('addbtn');
let list = document.querySelectorAll('.list');
let audio = document.getElementById('panj');

playbtn.addEventListener('click',playmusic);

function playmusic(){

    audio.play();
    line.classList.add('animation');
    // line.style.animationDuration = Math.floor(audio.duration) + 's';
    setInterval(() => {
        let time = Math.floor(audio.currentTime);
        let duration = Math.floor(audio.duration);
        let print = duration - Math.floor(audio.currentTime);
        line.style.animationDuration = print + 's';
        let min = String(print /60).slice(0,1) ;
        let sec = print-(min*60)

        let timemin = String(time /60).slice(0,1) ;
        let timesec=0;
        timesec = Number(time) % 60;
        
        if(timesec<10){
            timeshow.innerHTML =  '0'+ timemin  +':'+ 0 + timesec ;
        } else{
            timeshow.innerHTML =  '0'+ timemin  +':'+  timesec
        }
        
        if(sec>9){
            display.innerText = '0'+min + ':' + sec
        } else{
            display.innerText = '0'+min + ':'+ '0' + sec
        }
        
    }, 1000);
}

    

pausebtn.addEventListener('click',()=>{
    audio.pause();
})
fivebtn.addEventListener('click',()=>{
    audio.currentTime += 5 ;
})
rate1btn.addEventListener('click',()=>{
    audio.playbackRate = 4;
})

let musics=["music/1.mp3","music/2.mp3", "music/3.mp3","music/4.mp3"];

addbtn.addEventListener('click',()=>{  
    musics.unshift( 'music/'+ String(fileinput.value).slice(12,) );
})

let index = 0;

nextbtn.addEventListener('click',()=>{
    index++;
    if(index >= musics.length ){
        index = 0;
    }
    audio.setAttribute('src',musics[index]);
    audio.play()
})

prevbtn.addEventListener('click',()=>{
    index--;
    if(index < 0 ){
        index = musics.length - 1;
    }
    audio.setAttribute('src',musics[index]);
    audio.play()
});

list.forEach(function(item){
    item.addEventListener('click',function(){
        audio.src = 'music/' + item.textContent;
        audio.play();
    })
})
