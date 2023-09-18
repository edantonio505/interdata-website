lista_de_video = ["mZjmkCjb26o", "0OP8YUOaZYY", "6RwfasdC40Y", "5Yk4ed_mzsg"]

lista_projects = [
    "https://github.com/edantonio505/interdata-website",
    "https://github.com/ffba97/AppCitas",
    "https://github.com/edantonio505/cortaurl",
    "https://github.com/chrisatdev/abrelatas",
    "https://github.com/chrisatdev/stream-devops"
]

videos = document.getElementById("videos");

for (let index = 0; index < lista_de_video.length; index++) {
    const element = lista_de_video[index];
    video_element = "<iframe class='video center-vertical' src='https://www.youtube.com/embed/"+element+"'></iframe>"
    videos.innerHTML += video_element;
}   

for (let index = 0; index < lista_projects.length; index++) {
    const element = lista_projects[index];
    proyectos = document.getElementById("lista-de-proyectos");
    proyectos.innerHTML += "<li><a href='"+element+"' target='_blank' rel='noopener noreferrer'>"+element+"</a></li>";
}

function scroll_to(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

sentenceIntro = "Somos una comunidad interesada que aprendas a programar desde cero, mejorar tus habilidades de programacion con tutoriales y desafios y hacer amigos con tus mismos intereses.<br><br>Que esperas? Unete a nuestra comunidad haciendo <a href='https://discord.com/channels/1133435645247893504/1134487770279186462'>click aqui</a>"

var typed = new Typed('#intro', {
   strings: [sentenceIntro],
   typeSpeed: 10,
});