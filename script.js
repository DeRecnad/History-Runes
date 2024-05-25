const runes = [
    {
        name: 'Мир',
        image: 'pictures/mir.png',
        shortDescription: 'Руна мира и гармонии.',
        fullDescription: 'Мир символизирует гармонию, равновесие и благополучие. Эта руна помогает находить внутренний покой и способствовать миру в окружающем мире.'
    },
    {
        name: 'Чернобог',
        image: 'pictures/chernobog.png',
        shortDescription: 'Руна тьмы и разрушения.',
        fullDescription: 'Чернобог символизирует разрушение и тёмные силы. Эта руна помогает справляться с трудностями и преодолевать негативные влияния.'
    },
    {
        name: 'Алатырь',
        image: 'pictures/alatyr.png',
        shortDescription: 'Руна начала и конца, символизирует вселенную.',
        fullDescription: 'Алатырь является центром мироздания и символизирует как начало, так и конец всего сущего. Эта руна представляет вечное движение и гармонию вселенной.'
    },
    {
        name: 'Радуга',
        image: 'pictures/raduga.png',
        shortDescription: 'Руна радости и счастья.',
        fullDescription: 'Радуга символизирует радость, счастье и свет. Эта руна приносит позитивные изменения и помогает находить радость в жизни. Она также ассоциируется с исполнением желаний и надежд.'
    },
    {
        name: 'Нужда',
        image: 'pictures/nuzhda.png',
        shortDescription: 'Руна необходимости и выживания.',
        fullDescription: 'Нужда символизирует необходимость и выживание. Эта руна помогает справляться с трудностями и преодолевать преграды.'
    },
    {
        name: 'Крада',
        image: 'pictures/krada.png',
        shortDescription: 'Руна жертвы и преобразования.',
        fullDescription: 'Крада символизирует жертву и преобразование. Эта руна помогает в процессе очищения и преобразования, требующего жертв и усилий.'
    },
    {
        name: 'Треба',
        image: 'pictures/treba.png',
        shortDescription: 'Руна подношения и молитвы.',
        fullDescription: 'Треба символизирует подношение и молитву. Эта руна помогает в духовных практиках и обращении к божественным силам.'
    },
    {
        name: 'Сила',
        image: 'pictures/sila.png',
        shortDescription: 'Руна силы и энергии.',
        fullDescription: 'Сила символизирует мощь и жизненную энергию. Эта руна помогает укрепить силу воли и повысить жизненную энергию.'
    },
    {
        name: 'Ветер',
        image: 'pictures/veter.png',
        shortDescription: 'Руна перемен и движения.',
        fullDescription: 'Ветер является символом перемен и движения. Эта руна помогает в принятии новых решений и адаптации к изменениям. Она также может указывать на необходимость движения вперёд и отказа от прошлого.'
    },
    {
        name: 'Берегиня',
        image: 'pictures/bereginya.png',
        shortDescription: 'Руна защиты и материнства.',
        fullDescription: 'Берегиня символизирует защиту и материнскую заботу. Эта руна помогает защитить себя и своих близких, придаёт силы и уверенность.'
    },
    {
        name: 'Уд',
        image: 'pictures/ud.png',
        shortDescription: 'Руна мужской силы и плодородия.',
        fullDescription: 'Уд олицетворяет мужскую силу, энергию и плодородие. Эта руна способствует развитию личных качеств и достижению целей. Она также связана с физической силой и жизненной энергией.'
    },
    {
        name: 'Леля',
        image: 'pictures/lelya.png',
        shortDescription: 'Руна любви и гармонии.',
        fullDescription: 'Леля символизирует любовь, нежность и гармонию. Эта руна помогает в установлении эмоциональных связей и гармонии в отношениях. Она также способствует внутреннему миру и душевному спокойствию.'
    },
    {
        name: 'Рок',
        image: 'pictures/rok.png',
        shortDescription: 'Руна судьбы и неизбежности.',
        fullDescription: 'Рок символизирует судьбу и неизбежность. Эта руна помогает принимать неизбежное и находить пути для смягчения его влияния.'
    },
    {
        name: 'Опора',
        image: 'pictures/opora.png',
        shortDescription: 'Руна поддержки и устойчивости.',
        fullDescription: 'Опора символизирует поддержку и устойчивость. Эта руна помогает находить опору в трудных ситуациях и сохранять устойчивость.'
    },
    {
        name: 'Даждьбог',
        image: 'pictures/dajdbog.png',
        shortDescription: 'Руна изобилия и процветания.',
        fullDescription: 'Даждьбог символизирует солнечную энергию, изобилие и процветание. Эта руна привлекает удачу и благополучие, способствуя росту и развитию. Она также связана с плодородием и щедростью.'
    },
    {
        name: 'Перун',
        image: 'pictures/perun.png',
        shortDescription: 'Руна мужества и силы.',
        fullDescription: 'Перун олицетворяет мужество, силу и защиту. Эта руна помогает в преодолении трудностей и укреплении воли. Она также символизирует воинскую доблесть и справедливость.'
    },
    {
        name: 'Есть',
        image: 'pictures/est.png',
        shortDescription: 'Руна существования и реальности.',
        fullDescription: 'Есть символизирует существование и реальность. Эта руна помогает принять мир таким, какой он есть, и находить в нём своё место.'
    },
    {
        name: 'Исток',
        image: 'pictures/istok.png',
        shortDescription: 'Руна начала и происхождения.',
        fullDescription: 'Исток символизирует начало и происхождение. Эта руна помогает начинать новые проекты и искать истоки своих сил и вдохновения.'
    }
];


let currentIndex = 0;

function updateRune() {
    const runeName = document.getElementById('rune-name');
    const runeImage = document.getElementById('rune-image');
    const runeShortDescription = document.getElementById('rune-description');
    const runeFullDescription = document.getElementById('rune-full-description');

    runeName.textContent = runes[currentIndex].name;
    runeImage.src = runes[currentIndex].image;
    runeShortDescription.textContent = runes[currentIndex].shortDescription;
    runeFullDescription.textContent = runes[currentIndex].fullDescription;
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
