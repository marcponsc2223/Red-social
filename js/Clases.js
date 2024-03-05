// 🚀 Crea un petit sistema que representi les interaccions bàsiques en una xarxa social. 
// Concretament implementaràs un sistema de perfils on els usuaris poden crear un perfil, fer publicacions i seguir altres usuaris.
// Gestió de Xarxes Socials:
// Defineix un objecte socialMedia per gestionar els perfils d'usuari.
// Quan tinguis l’estructura creada, realitza les proves necessàries per verificar que tots els mètodes funcionen correctament.
let body = document.getElementById('body')
let p = document.createElement('p')
let form = document.getElementById('form')
form.style.display = 'none'
let form2 = document.getElementById('form2')
form2.style.display = 'none'
p.id = 'users'
body.appendChild(p)
let u = document.getElementById('users')

const socialMedia = {
    users: [],
    addUser: function (user) {
        let us = new User({})
        us.setUsername = user.username
        us.setBio = user.bio
        this.users.push(us)
    },

    showAllUsers: function() {
        let content = ''
        this.users.forEach((user) => {
           content += user.getProfile
        })
        p.textContent = content
    },

    followUser: function(user){
       let nameFinded = this.users.find(function (name) {
            let fw = name.getFollowers
            // name.setFollowers = 0
            // + ' Username Following: ' + user
            name.setFollowers = (fw +=1)
            console.log(name.getProfile); 
            return name.username === user
        })
        if (nameFinded) {
            console.log('Nombre encontrado');
            // this.user
        } else {
            console.log('nombre no encontrado');
        }
    }
}

let targetClicked
document.onclick = function(event) {
    let target = event.target
    if (target.id == 'createUser') {
        targetClicked = target
        form.style.display = 'block'
    } else if (target.id == 'showUsers') {
        u.style.display = 'block'
        socialMedia.showAllUsers()
    }
    else if (target.id == 'hideUsers') {
        u.style.display = 'none'
    }
    else if (target.id == 'followUser') {
        targetClicked = target
        form2.style.display = 'block'
    }
}
document.onsubmit = function(event) {
    event.preventDefault()
    if (targetClicked.id == 'createUser') {
        let username = document.getElementById('username').value
        let bio = document.getElementById('bio').value
        createUser(username, bio)
        form.style.display = 'none'
    } else if (targetClicked.id == 'followUser') {
        let username = document.getElementById('usernameSearch').value
        form2.style.display = 'none'
        socialMedia.followUser(username)
    }

}
function createUser(username, bio) {
    let userAdded = {
        username: username,
        bio: bio
    }
    socialMedia.addUser(userAdded)
}