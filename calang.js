document.getElementById('btn-start').addEventListener('click', function () {
    let num = 0;
    const intervalId = setInterval(() => {
        console.log(++num)
    }, 1000)
    
    const setTime = document.getElementById('time');
    setTime.innerText = (intervalId);

    const stopTime = document.getElementById('btn-stop')

    
})

