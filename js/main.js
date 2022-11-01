document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.app__btn');
    const output = document.querySelector('.app__output');

    let count = 0;

    btns.forEach(item => {
        item.addEventListener('click', () => {
            let action = item.getAttribute('data-btn');

            switch(action){
                case 'decr':
                    count--;
                    output.textContent = count;
                    break
                case 'reset':
                    count = 0;
                    output.textContent = count;
                    break
                case 'incr':
                    count++;
                    output.textContent = count;
                    break
            }
        });
    });
})