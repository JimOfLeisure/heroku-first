console.log('hi')

const input = document.querySelector('input');
const output = document.querySelector('#output');
const button = document.querySelector('button');
button.addEventListener('click', handleButton);

function handleButton(event) {
    fetch('/api/' + encodeURIComponent(input.value.toLowerCase()))
        .then(res => res.json())
        .then(data => {
            output.innerText = data.birthName;
        })
        .catch(err => {
            console.error(err);
        })
}