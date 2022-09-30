const input = document.getElementById('input');
const button = document.getElementById('button');
const countdown = document.getElementById('countdown');

button.addEventListener('click', () => {
    const segundos = input.value;
    function countDown(segundos) {
        if (segundos === 0) {
            return countdown.textContent = "00";
        }else{
            countdown.textContent = segundos;
            setTimeout(countDown, 1000, segundos-1);
        }
    }
    countDown(segundos);
});