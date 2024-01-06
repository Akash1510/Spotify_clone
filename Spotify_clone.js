console.log("welcome");
let songIndex=0;
let audioElement=new Audio('7.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let ok=document.getElementById('ok')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))
// let songItemPlay=document.getElementsByClassName("songItemPlay")

let songs=[
    {songname:"Bandeya", filePath:"songs/1.mp3",coverPath:"https://th.bing.com/th/id/OIP.RjZ34vSga7UwrDjJjAY7SQHaFj?pid=ImgDet&w=202&h=151&c=7&dpr=1.1"},
    {songname:"Blue-Eyes", filePath:"songs/2.mp3", coverPath:"https://th.bing.com/th/id/R.fdd680b0315836d5e539635ab90aa578?rik=0FLnciYek3M1dQ&riu=http%3a%2f%2fwww.lyricsmint.com%2fwp-content%2fuploads%2f2013%2f11%2fhoneysingh_blueeyes-1.jpg&ehk=UVUO58cx6fRTlG21IecDlKDc6Hk5JiN%2beWUnBWu6%2brA%3d&risl=&pid=ImgRaw&r=0"},
    {songname:"Kina Sona tu Hai", filePath:"songs/3.mp3", coverPath:"https://th.bing.com/th/id/OIP.Qpcz49UCX7UNPWoKvbkVWQHaEJ?w=329&h=183&c=7&r=0&o=5&dpr=1.7&pid=1.7"},
    {songname:"Sawan Aya hai", filePath:"songs/4.mp3", coverPath:"https://lh6.googleusercontent.com/proxy/Co4dlrWxOxu4_c5Exx8i7H5yrmlB1C_oEl-NZbEHM_cD-XErkERpU82JXKncavcpUn0=s0-d"},
    {songname:"O-Shathi", filePath:"songs/5.mp3", coverPath:"https://th.bing.com/th/id/R.bda021a0a8a6cd36fa2acda56a68dd26?rik=L9C0548u7KNl%2bw&riu=http%3a%2f%2fc.saavncdn.com%2f203%2fBaaghi-2-Hindi-2018-20180320-500x500.jpg&ehk=wUG%2fy%2bJ%2fRoFUymACgw72Vvi3t3hZ7SCpAz6Kcw4xK1Y%3d&risl=&pid=ImgRaw&r=0"},
    {songname:"Khamosiyan", filePath:"songs/6.mp3", coverPath:"https://th.bing.com/th/id/OIP.n9FvP_SVMnN7lSb-ipSXsgHaJY?w=122&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"},
    
];

songItems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname

})

// audioElement.play();

// handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        ok.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('a-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        ok.style.opacity=0;
     }

})
// listen event
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate")
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration/100);
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{ 
        console.log(e.target)
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=(`songs/${songIndex+1}.mp3`);
        masterSongName.innerText=songs[songIndex].songname
        audioElement.currentTime=0;
        audioElement.play();
        ok.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");


    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
 }
    audioElement.src=(`songs/${songIndex+1}.mp3`);
    masterSongName.innerText=songs[songIndex].songname
    audioElement.currentTime=0;
    audioElement.play();
    ok.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=(`songs/${songIndex+1}.mp3`);
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    ok.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})



