function timer(id, deadline){

function getTimeRemaining(endtime){
 const t = Date.parse(endtime) - Date.parse(new Date()),
 days = Math.floor(t/(1000*60*60*24)),
 hours = Math.floor((t/(1000*60*60) % 24)),
 minutes = Math.floor((t/(1000*60) % 60)),
 seconds = Math.floor((t/(1000)% 60));

 return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
 };
}

function setZero(num){
    if(num >=0 && num <10 ){
return `0${num}`;
    } else{
        return num;
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    timerId = setInterval(UpdateClock, 1000);

UpdateClock();

    function UpdateClock(){
    const t = getTimeRemaining(endtime);
    days.innerHTML = setZero(t.days);
    hours.innerHTML = setZero(t.hours);
    minutes.innerHTML = setZero(t.minutes);
    seconds.innerHTML = setZero(t.seconds);

    if (t.total <= 0){
        clearInterval(timerId);
    }
    }
}

setClock(id, deadline);

}

export default timer;