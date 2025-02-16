const heart = document.getElementById('heart');
const message = document.getElementById('message');
const compliments = [
    "Você é como o Google. Tudo o que eu procuro, eu encontro em você!",
    "Se beleza fosse tempo, você seria a eternidade.",
    "Você não é GPS, mas me guiará para o seu coração?",
    "Você é a razão pela qual eu sorrio todos os dias.",
    "Seus olhos são como o céu, me perco neles.",
];

heart.addEventListener('click', () => {
    heart.classList.add('zoom');
    setTimeout(() => {
        heart.classList.remove('zoom');
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        message.textContent = randomCompliment;
        moveHeart();
    }, 500);
});

function moveHeart() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
}

moveHeart();