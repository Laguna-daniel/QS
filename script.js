// --- LOADER ---
setTimeout(() => {
    document.getElementById('loading').classList.add('fade-out');
}, 3000);

// --- POPUP ---
const popup = document.getElementById('popupMessage');
const popupEmoji = document.getElementById('popupEmoji');
const popupText = document.getElementById('popupText');

function showPopup(emoji, text) {
    popupEmoji.textContent = emoji;
    popupText.textContent = text;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 4500);
}

// --- TARJETAS INTERACTIVAS ---
const mensajesTarjetas = {
    elephant: { emoji: '🐘', msgs: ['¡Los elefantes son los mejores! Sara los adora 💜', '🐘 Son criaturas sabias y nobles', '¡El animal favorito de Sara!'] },
    kitty: { emoji: '🎀', msgs: ['¡Hello Kitty', ' Siempre con su lazo rosa', 'no se que poner jajajaj'] },
    sushi: { emoji: '🍣', msgs: ['¡Sushi!', '🍣 Sara le el sushi de salmón', 'no enserio come mucho sushi?'] },
    peluches: { emoji: '🧸', msgs: ['¡A Sara le encantan los peluches! ', '🧸 Esponjosos y tiernos como ella', 'no encontre el elefante :/'] },
    rapunzel: { emoji: '✨', msgs: ['¡Rapunzel es su princesa favorita! 💜', '✨ Las linternas flotantes son mágicas', 'la que la representa por que no la dejan salir jejej'] },
    purple: { emoji: '💜', msgs: ['¡El color morado es el favorito de Sara!', '💜 Magia pura en su cuarto de sara', 'Un color que refleja su personalidad?'] }
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const tipo = card.dataset.type;
        const data = mensajesTarjetas[tipo];
        if (data) {
            const msg = data.msgs[Math.floor(Math.random() * data.msgs.length)];
            showPopup(data.emoji, msg);
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.style.transform = '', 200);
        }
    });
});

// --- 🧠 CEREBRO DE LAGUNA ---
const cerebroAgente = [
    // SARA
    { llaves: ['mi nombre', 'como me llamo', 'quien soy yo'], respuesta: "Pues cómo más te ibas a llamar social ?... Te llamás Sara JAJAJAJ", emoji: "👸" },
    { llaves: ['mis ojos', 'color de ojos', 'miel', 'color de mis ojos'], respuesta: "Tenés unos ojos color Miel,esos que a la vista parecen de problema  👀", emoji: "👁️" },
    { llaves: ['colegio', 'donde estudio', 'rufino sur'], respuesta: "Estudias en el Rufino Sur de acá de Armenia, Quindío.", emoji: "🎒" },
    { llaves: ['grado', 'curso', '11'], respuesta: "Estás en 11°, cursando el último año escolar. Ya casi sale, tenga fe en la icfes", emoji: "🌟" },
    { llaves: ['edad de sara', 'años tengo', 'cuantos años tengo', 'mi edad'], respuesta: "Tienes 17 años", emoji: "" },
    { llaves: ['desinteres', 'no me gusta', 'odio'], respuesta: "Sé perfectamente que detestás el desinterés.calmate creo que ya demostre mucho JAJAJAJA", emoji: "" },
    { llaves: ['sufrio', 'amigas', 'metia con las amigas', 'gente', 'pasado'], respuesta: "Ay sara,me dio pesar de esa gente que se come a las amigas", emoji: "" },
    { llaves: ['mentiras', 'mentira'], respuesta: "No te gustan para nada las mentiras, preferís la verdad ante todo.", emoji: "🤝" },
    { llaves: ['animal favorito', 'elefante', 'elefantes'], respuesta: "¡Tu animal favorito en todo el universo es el elefante! Los amás por lo lindos, grandes y sabios que son.", emoji: "🐘" },
    { llaves: ['muneco favorito', 'muñeco favorito', 'personaje favorito', 'hello kitty', 'kitty'], respuesta: "¡Tu muñeco favorito de toda la vida es Hello Kitty! Te fascina lo tierna que es con su lacito rosa. 🎀🌸", emoji: "🎀" },
    { llaves: ['comida favorita', 'sushi'], respuesta: "¡Tu comida favorita y la que te saca una sonrisa siempre es el delicioso Sushi! Te encanta comer bien rico. 🍣", emoji: "" },
    { llaves: ['peluches', 'peluche', 'le gusta mucho los peluches'], respuesta: "Ay, ¡sé que te encantan y te fascinan demasiado los peluches! Son todos esponjosos y tiernos. 🧸", emoji: "🧸" },
    { llaves: ['rapunzel', 'morado', 'cartas'], respuesta: "te encantan Rapunzel, las cartas hechas con amor y todo lo que sea de color morado. ¡Es que tenés unos gustos impecables! ", emoji: "" },
    
    // DANIEL
    { llaves: ['tu nombre', 'como te llamas', 'quien eres', 'quien es daniel', 'vos quien sos'], respuesta: "Yo soy el agente de Laguna, ese muchacho de 18 años que le hizo una pagina con sus gustos", emoji: "😏" },
    { llaves: ['estudio daniel', 'donde estudio daniel', 'colegio daniel'], respuesta: " ya termine el coelgio , aun sigo llendo igual allá", emoji: "👨" },
    { llaves: ['edad de daniel', 'años tiene daniel', 'cuantos años tiene'], respuesta: "tengo 18 años, no parezco cierto? es que tengo cara de jovencito", emoji: "" },
    { llaves: ['sena', 'que estudia'], respuesta: "Daniel estudia actualmente en el SENA, camellando juicioso por sus metas físicas y profesionales. 🏢", emoji: "🏢" },
    { llaves: ['gusta daniel', 'le gusta a daniel', 'interes daniel'], respuesta: "Me gusta demostrar el interés de verdad, nada de juegos raros. Además, me fascina jugar baloncesto.", emoji: "🏀" },
    { llaves: ['gustos fisicos', 'que le gusta fisicamente'], respuesta: "yo no tengo un prototipo o gustos físicos fijos... veo primero el interes.", emoji: "🙈" },
    { llaves: ['baloncesto', 'basquet', 'deporte'], respuesta: "Le encanta el baloncesto, le apasiona meterle ganas a la cancha tanto como le mete ganas a cuidarte a vos. 🏀", emoji: "⛹️‍♂️" },
    { llaves: ['amigos daniel', 'sayko', 'parceros'], respuesta: "Daniel es como un mejor amigo para Leyva, y comparte ese puesto con Sayko, el otro parcero fiel de ustedes. ¡Son un parche firme! 💪", emoji: "🤝" },
    { llaves: ['jugador favorito', 'anthony edwards'], respuesta: "Su jugador favorito de toda la NBA es Anthony Edwards, ¡puro talento y berraquera en la cancha! 🔥", emoji: "⚡" },

    // LA PÁGINA
    { llaves: ['la pagina', 'quien hizo la pagina', 'creo', 'hizo esto', 'programo'], respuesta: "esta pagina la hizo daniel, se trasnocho pero tiene sus gustos sirve?", emoji: "🔮" },
    { llaves: ['motivo', 'por que la hizo', 'por que hizo la pagina', 'razon'], respuesta: "sara no se JAJAJAJ, solo me nacio hacerla, pero si le gusto?", emoji: "" },
    { llaves: ['contenido', 'que tiene la pagina', 'que hace'], respuesta: "Esta página es una belleza, describe todo tu cuarto de ensueño con tus cosas favoritas: el elefante, Hello Kitty, el sushi, tu gusto por los peluches, Rapunzel y el fondo morado que tanto te trama. 🐘🎀🍣🧸💜", emoji: "🎨" }
];

// --- FUNCIONES DEL AGENTE ---
function toggleLagunaChat() {
    const windowEl = document.getElementById('lagunaWindow');
    windowEl.classList.toggle('open');
    if (windowEl.classList.contains('open')) {
        document.getElementById('lagunaInput').focus();
    }
}

function sendLagunaMessage() {
    const inputEl = document.getElementById('lagunaInput');
    const chatArea = document.getElementById('lagunaChatArea');
    const texto = inputEl.value.trim();
    if (!texto) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'laguna-msg user';
    userMsg.textContent = texto;
    chatArea.appendChild(userMsg);
    inputEl.value = '';
    chatArea.scrollTop = chatArea.scrollHeight;

    setTimeout(() => {
        const query = texto.toLowerCase();
        let respuestaEncontrada = null;

        for (let item of cerebroAgente) {
            let coincide = item.llaves.some(llave => query.includes(llave));
            if (!coincide) {
                const palabrasQuery = query.split(' ');
                coincide = item.llaves.some(llave => {
                    const palabrasLlave = llave.split(' ');
                    return palabrasLlave.every(p => query.includes(p));
                });
            }
            if (coincide) {
                respuestaEncontrada = item;
                break;
            }
        }

        const botMsg = document.createElement('div');
        botMsg.className = 'laguna-msg bot';

        if (respuestaEncontrada) {
            botMsg.textContent = `${respuestaEncontrada.emoji} ${respuestaEncontrada.respuesta}`;
            showPopup(respuestaEncontrada.emoji, respuestaEncontrada.respuesta);
        } else {
            botMsg.textContent = "🔮 ey no me corche asi, pregunte otra cosa ome... mentiras pero pregunta algo sobre la pagina.";
        }

        chatArea.appendChild(botMsg);
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 600);
}

// --- 🖼️ CARGAR IMÁGENES PERSONALIZADAS ---
// 🔽 CAMBIA AQUÍ LAS URLS DE TUS IMÁGENES 🔽
const imagenes = {
    elefante: "images/dibujar-elefante-kawaii-tierno.jpg",
    kitty: "images/hello kitty.jpg ",
    sushi: "images/sushi.jpg",
    peluches: "images/peluche.jpg",
    rapunzel: "images/rapunzel.jpg ",
    morado: "images/morado.jpg "
};

// Aplicar imágenes
document.getElementById('imgElefante').src = imagenes.elefante;
document.getElementById('imgKitty').src = imagenes.kitty;
document.getElementById('imgSushi').src = imagenes.sushi;
document.getElementById('imgPeluches').src = imagenes.peluches;
document.getElementById('imgRapunzel').src = imagenes.rapunzel;
document.getElementById('imgMorado').src = imagenes.morado;