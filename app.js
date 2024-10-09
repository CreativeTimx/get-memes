const meme_butt = document.getElementById('meme_butt');
const meme_wrap = document.querySelector('.meme-wrap');

async function getMeme() {
    const memeUrl = `https://meme-api.com/gimme/wholesomememes`;
    const response = await fetch (memeUrl);
    const data = await response.json();
    return data;

}
meme_butt.addEventListener('click', async () =>{
    const newMeme = await getMeme();
    displayMeme(newMeme);
    console.log(newMeme);
})

function displayMeme(newMeme){
    meme_wrap.innerHTML = "";
    const memeWrapper = document.createElement('div');
    memeWrapper.classList.add('w-72');

    const memeHeader = document.createElement('h1');
    memeHeader.classList.add('text-center', 'font-mono', 'text-xl', 'mb-5');
    memeHeader.textContent = newMeme.title;

    const memeImg = document.createElement('img');
    memeImg.src = newMeme.url;

    const memeAuthor = document.createElement('h3');
    memeAuthor.classList.add('text-center', 'my-4');
    memeAuthor.textContent = `Author: ${newMeme.author}`;

    memeWrapper.appendChild(memeHeader);
    memeWrapper.appendChild(memeImg);
    memeWrapper.appendChild(memeAuthor);
    meme_wrap.appendChild(memeWrapper);
}