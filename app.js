let song_0 = new Song('2AM', 'JustaTee','./music/2AM - JustaTee ft BigDaddy.mp3','image/2am.jpg');
let song_1 = new Song('Chìm Sâu', 'RPT MCK', './music/Chìm Sâu - RPT MCK ft Trung trần.mp3', 'image/chimsau.jpg');
let song_2 = new Song('Có Em', 'Madihu - Feat Low', './music/Có Em Madihu - Feat Low G.mp3', '/image/coem.jpg');
let song_3 = new Song('Tell Ur Mom II', 'Winno', './music/Tell Ur Mom II - Winno.mp3', '/image/tellurmom.jpg');
let song_4 = new Song('THERES NO ONE AT ALL','M-TP','./music/THERES NO ONE AT ALL - Sơn Tùng M-TP.mp3', '/image/therenoone.jpg');

let musics = [song_0, song_1, song_2, song_3, song_4];
document.getElementById('name').innerHTML = musics[0].name;
document.getElementById('singer').innerHTML = musics[0].singer;
document.getElementById('song').src = musics[0].link;
document.getElementById('image').src = musics[0].image;
let progress = document.getElementById('range').value;
let song = document.getElementById('song');
let isPlay = true;
// dừng phát bài nhạc
function playPause(){
    if(isPlay){
        song.play();
        isPlay = false;
        let pau = '<ion-icon name="pause-circle"></ion-icon>'
        document.getElementById('play').innerHTML = pau;
    }else{
        song.pause()
        isPlay = true;
        let play = '<ion-icon name="play"></ion-icon>'
        document.getElementById('play').innerHTML = play;
    }
    
}
let i = 0;
//chuyển bài tới
function play_forward(){
    i++;
    if(i == (musics.length)){
        i = 0;
    }
    document.getElementById('name').innerHTML = musics[i].name;
    document.getElementById('singer').innerHTML = musics[i].singer;
    document.getElementById('song').src = musics[i].link;
    document.getElementById('image').src = musics[i].image;
}
// chuyển bài lui
function play_back() {
    i--;
    if(i == -1){
        i = musics.length-1;
    }
    document.getElementById('name').innerHTML = musics[i].name;
    document.getElementById('singer').innerHTML = musics[i].singer;
    document.getElementById('song').src = musics[i].link;
    document.getElementById('image').src = musics[i].image;
}
song.ontimeupdate = function(){
    // cho cái thanh bài hát chạy
    if(song.duration){
        progress = Math.floor((song.currentTime / song.duration) *100);
        document.getElementById('range').value = progress;
    }
    // hiển thị giây khi chạy bài hát
    let minute_start = Math.floor(song.currentTime /60);
    let second_start = Math.floor(song.currentTime - minute_start*60);
    let minute_end = Math.floor((song.duration - song.currentTime) /60);
    let second_end = Math.floor((song.duration - song.currentTime) - minute_end*60);
    function return_time (a){
        if(a<10){
            kq = `0${a}`
            return kq
        }else
        return a;
    }
    let m_start = return_time(minute_start);
    let s_start = return_time(second_start);
    let m_end = return_time(minute_end);
    let s_end = return_time(second_end);
    if(!song.duration){
        document.getElementById('duration').innerHTML = '00:00'; 
        setTimeout( function() {
            console.log(song.duration);
            document.getElementById('remaining').innerHTML = `${('0' + Math.floor(song.duration/60)).slice(-2)}:${('0' + Math.floor(song.duration - 60 * Math.floor(song.duration/60))).slice(-2)}`;
        }, 100);
    }
    if(song.duration){
        document.getElementById('duration').innerHTML = `${m_start}:${s_start}`;
        document.getElementById('remaining').innerHTML = `${m_end}:${s_end}`;
    }
}
// chức năng tua bài hát
document.getElementById('range').onchange = function(e){
    let seekTime = (e.currentTarget.value/100)*song.duration;
    song.currentTime = seekTime;
}
