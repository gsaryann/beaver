let beaver = document.querySelector('.beaver');
let text = document.querySelector('.text');
let stat = document.querySelector('.status')
let again = document.querySelector('.again');
let condition = true;
//убегание бобра

beaver.addEventListener('mousemove', function(event) {
    if (!event.shiftKey) {
        maxElemLeft = document.documentElement.clientWidth - beaver.offsetWidth;
        maxElemTop = document.documentElement.clientHeight - beaver.offsetHeight;
        beaver.style.top = Math.floor(Math.random() * maxElemTop) + 'px';
        beaver.style.left = Math.floor(Math.random() * maxElemLeft) + 'px';
    }
});
//время и логика
let timeleft1 = 35;
let interval1 = setInterval(function() {
    if (condition) {
        if (timeleft1 <= 0) {
            clearInterval(interval1);
            document.querySelector('.count').innerHTML = ' ';
            beaver.remove()
            text.innerHTML = 'You Lose!'
            let audio = new Audio('lose.mp3');
            audio.play();
            stat.src = 'https://media3.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif?cid=ecf05e47o6hxgrrsdrqiz0zzol5tce4s9t9br00s1ubqv0qv&rid=giphy.gif&ct=g';
            again.innerHTML = "Click here to start again";
        } else {
            beaver.addEventListener('click', function(event) {
                document.querySelector('.count').innerHTML = ' ';
                beaver.remove()
                text.innerHTML = 'You Won!'
                let audio = new Audio('win.mp3');
                audio.play();
                stat.src = 'https://otkritkis.com/wp-content/uploads/2022/07/htjdi.gif';
                again.innerHTML = "Click here to start again";
                condition = false;
            });
            document.querySelector('.count').innerHTML = timeleft1;
        }
    } else(clearInterval(interval1))
    timeleft1 -= 1;
}, 1000);

//экран загрузки

let inf = document.createElement('div');
inf.innerHTML = 'Привет, у тебя есть 30 секунд, чтобы поймать бобра! <br> Игра начинается, через <span style="display:contents" id="countdown"></span>';
inf.style = '    position: absolute;height: 100vh;top: 50%;left: 50%;transform: translate(-50%,-50%);display: flex;z-index: 100000;justify-content: center;align-items: center;background-color: #826062;width: 100%;text-align: center;'
document.body.append(inf);

let timeleft = 5;
let interval = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Finished";
        inf.remove()
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);