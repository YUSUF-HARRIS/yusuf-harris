var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");
var ampm = document.getElementById("ampm");


function update() {

    hr = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();

    if (hr > 12) {
        hr = hr - 12
        ampm.textContent = "PM"
    }


    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hours.innerText = hr;
    minute.innerText = min;
    second.innerText = sec;

    setInterval(() => {
        update()
            , 1000
    })
}
update()