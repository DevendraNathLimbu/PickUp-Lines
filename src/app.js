const BaseUrl = 'rizzapi.vercel.app/random';
const p = document.querySelector('p');
const button = document.querySelector('button');

const getData = async ()=> {
    try{
        const response = await fetch(`https://${BaseUrl}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const text = data.text;
        p.textContent = text;
    }
    catch(error){
        console.error('There has been a problem with your fetch operation:', error);
        p.textContent = 'Failed to load data. Please try again later.';
    }
}

button.onclick = getData;

const span = document.querySelector('span');

span.onclick = () => {
    const txt = document.createElement('span');
    txt.textContent = 'Copied!';
    span.appendChild(txt);
    setTimeout(() => {
        txt.remove();
    },400);
    navigator.clipboard.writeText(p.textContent);
}