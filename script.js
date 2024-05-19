const runes = [
    {
        image: 'pictures/rune1.png',
        description: 'Описание первой руны.'
    },
    {
        image: 'pictures/rune2.png',
        description: 'Описание второй руны.'
    },
    {
        image: 'pictures/rune3.png',
        description: 'Описание третьей руны.'
    }
    // Добавьте больше рун здесь
];

let currentIndex = 0;

function updateRune() {
    const runeImage = document.getElementById('rune-image');
    const runeDescription = document.getElementById('rune-description');

    runeImage.src = runes[currentIndex].image;
    runeDescription.textContent = runes[currentIndex].description;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? runes.length - 1 : currentIndex - 1;
    updateRune();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === runes.length - 1) ? 0 : currentIndex + 1;
    updateRune();
});

// Инициализация
updateRune();
