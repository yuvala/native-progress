

function clickHandler() {
    let val = 1;
    const bar = document.getElementById('bar');
    bar.style.width = val + '%';
    const inter = setInterval(change, 10);
    function change() {
        if (val >= 100) {
            clearInterval(inter);

        } else {
            val++;
            bar.style.width = val + '%';
        }
    }
}


function clickHandler2() {
    const bar = document.getElementById('barB');
    bar.style.width = 0 + '%';
    totalTime = 10;
    chunk = 100 / totalTime;


    const inter = setInterval(change, 1000);
    function change() {
        if (totalTime <= 0) {
            clearInterval(inter);

        } else {
            totalTime -= 1;
            debugger;
            bar.style.width = (10 - totalTime) * chunk + '%';
        }
    }
}

