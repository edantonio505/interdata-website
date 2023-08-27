lista_de_video = ["mZjmkCjb26o", "0OP8YUOaZYY"]

lista_projects = [
    "https://github.com/edantonio505/interdata-website",
    "https://github.com/ffba97/AppCitas",
    "https://github.com/edantonio505/cortaurl",
    "https://github.com/chrisatdev/abrelatas",
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
    proyectos.innerHTML += "<li><a href='"+element+"'>"+element+"</a></li>";
}


function scroll_to(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


sentenceIntro = "Somos una comunidad interesada que aprendas a programar desde cero, mejorar tus habilidades de programacion con tutoriales y desafios y hacer amigos con tus mismos intereses.Que esperas? Unete a nuestra comunidad haciendo <a href='https://discord.gg/hgXxfMjx'>click aqui</a>"

var typed = new Typed('#intro', {
   strings: [sentenceIntro],
   typeSpeed: 10,
});