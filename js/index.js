let timeout;
var app = new Vue({
    el: '#app',
    data: {
        knowledge:[
            {
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
                name:'HTML',
                description:'Used to create a skeleton of website',
                years:'5 years',
                width:'width:15vmin',
                animated:'animated slideInLeft'
            },
            {
                logo:'https://cdn.clipart.email/9924122f6a73b517e96ffaced1f2ac9b_download-icon-css-3-svg-eps-png-psd-ai-logo-vector-color-free-el-_1141-1600.png',
                name:'CSS',
                description:'Used to stylize a website ',
                years:'5 years',
                width:'width:10vmin',
                animated:'animated slideInDown'
            },
            {
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png',
                name:'JavaScript',
                description:'This is a scripts language used to transform a static website in a dinamic website',
                years:'4 years',
                width:'width:12vmin',
                animated:'animated slideInRight'
            },
            {
                logo:'https://cdn.onlinewebfonts.com/svg/img_435979.png',
                name:'PHP',
                description:'During my career i used PHP so much to make a virtual stores with prestashop platform.',
                years:'3 years',
                width:'width:15vmin',
                animated:'animated slideInLeft'
            },
            {
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png',
                name:'GIT',
                description:`I have a some experience with GIT, i'm working with an app and  we used so much this to manage the app.`,
                years:'2 years',
                width:'width:12vmin',
                animated:'animated slideInUp'
            },  
            {
                logo:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
                years:'1 year',
                width:'width:12vmin',
                animated:'animated slideInRight'
            }        
        ],
        projects:[
            {
                title:'Transform Binary',
                desc:'This is a project that transform the binary number in a decimal number',
                link:'https://github.com/jjotta158/transform-binary'
            },
            {
                title:'FatecLins-JavaScript2020',
                desc:'Repositório com as atividades da materia de programação pra internet da faculdade',
                link:'https://github.com/jjotta158/FatecLins-JavaScript2020'
            },
            {
                title:'DevRadar',
                desc:'Projeto da Omnistack 10 onde é uma aplicação que visa ajudar os contratantes a encontrar programadores perto de você',
                link:'https://github.com/jjotta158/devRadar'
            },  
        ],
        contacts:[
            {
                socialName:'Linkedin',
                logo:'https://image.flaticon.com/icons/png/512/174/174857.png',
                link:'https://www.linkedin.com/in/jairo-junior-496a4b14a/'
            },
            {
                socialName:'Github',
                logo:'https://image.flaticon.com/icons/png/512/25/25231.png',
                link:'https://github.com/jjotta158'
            },
            {
                socialName:'Gitlab',
                logo:'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png',
                link:'https://gitlab.com/jjotta158'
            },
            {
                socialName:'Whatsapp',
                logo:'https://i.ya-webdesign.com/images/whatsapp-icon-transparent-png-4.png',
                link:'https://api.whatsapp.com/send?phone=5514988051895'
            },
        ]
    },
  })
let i = 0;
let card = document.getElementById('card-project');
setInterval(()=> {
    card.classList.remove('animated', 'fadeIn')
    card = document.getElementById('card-project');
    let data = app.projects[i];
    let cardTitulo = document.getElementById("card-titulo")
    let cardDescription = document.getElementById("card-description")
    let cardButtonLink = document.getElementById('card-button-link')
    setTimeout(() => {
        card.classList.add('animated', 'fadeIn')
        cardTitulo.innerHTML = data.title;
        cardDescription.innerHTML = data.desc;
        cardButtonLink.href = data.link
    },100)
    
    
    if (i < app.projects.length -1) {
        i++;
    } else {
        i = 0;
    }    
}, 5000)

const activatePhotosAnimate = () => {
    let photos = document.getElementsByClassName('photo-card');
    photos[0].classList.add('animated', 'slideInDown');
    photos[1].classList.add('animated', 'slideInLeft');
    photos[2].classList.add('animated', 'slideInRight');
    document.getElementsByClassName('photo-container')[0].style.visibility = 'visible'
}

const activateKnowLedgeCardsAnimate = () => {
    let data = app.knowledge;
    let cards = document.getElementsByClassName('card-knowledge');
    for (let index = 0; index < cards.length; index++) {
        let card = cards[index];
        animatedClass = data[index].animated
        animatedClass = animatedClass.split(" ")
        card.classList.add(animatedClass[0], animatedClass[1])        
    }
    document.getElementsByClassName('cards')[0].style.visibility = 'visible'
}

const activateContactsAnimation = () => {
    let contact = document.getElementsByClassName('contact');
    contact[0].classList.add('animated', 'slideInLeft');
    contact[1].classList.add('animated', 'slideInDown');
    contact[2].classList.add('animated', 'slideInUp');
    contact[3].classList.add('animated', 'slideInRight');
    document.getElementsByClassName('contacts')[0].style.visibility = 'visible'
}

const scrollFunction = () => {
    let body = document.getElementsByTagName('main')[0];
    
    if (body.scrollTop >= 650.2000122070312 && body.scrollTop <= 810.2000122070312) {
        activatePhotosAnimate()
    }
    if (body.scrollTop >= 1400.5999755859375 && body.scrollTop <= 1663.199951171875){
        activateKnowLedgeCardsAnimate()
    }
    if (body.scrollTop >= 2900.800048828125) {
        activateContactsAnimation()
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}