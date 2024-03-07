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
let postForm = document.getElementById('postForm')
postForm.style.display = 'none'
let showPostP = document.getElementById('postText')
showPostP.style.display = 'none'
p.id = 'users'
body.appendChild(p)
let u = document.getElementById('users')
let userToPublicContent
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
            name.setFollowers = (fw +=1)
            console.log(name.getProfile); 
            return name.username === user
        })
        if (nameFinded) {
            p.textContent = `Usuario encontrado, has comenzado a seguir a este usuario: "${nameFinded.getUsername}"`
            // console.log('Nombre encontrado')
            
        } else {
            p.textContent = `No se ha encontrado ningún usuario con el nombre:  "${user}"`
        }
    } ,
    publicPost: function(post) {
        p.textContent = post
    }, 
    searchUserIfExist : function(userSearched) {
        let userExist = this.users.find(function (name) {
            return name.username === userSearched
        })
        if (userExist) {
            p.textContent = 'El usuario existe, introduce su post.'
            targetClicked = 'publicPost'
            form2.style.display = 'none'
            postForm.style.display = 'block'
            let posts = userExist.getPost
            userExist.setPost = (posts += 1)
            
        } else {form2.style.display = 'none'; p.style.display = 'block' ; p.textContent = 'El usuario no existe.' ;
    }
    }
}

let targetClicked
document.onclick = function(event) {
    let target = event.target
    if (target.id == 'createUser') {
        targetClicked = target
        form.style.display = window.getComputedStyle(form).display === 'none' ? 'block' : 'none'
    } else if (target.id == 'showUsers') {
        u.style.display = 'block'
        socialMedia.showAllUsers()
    }
    else if (target.id == 'hideUsers') {
        u.style.display = 'none'
    }
    else if (target.id == 'followUser') {
        targetClicked = target
        form2.style.display = window.getComputedStyle(form2).display === 'none' ? 'block' : 'none'
    }
    else if (target.id == 'post') {
        targetClicked = target
        form2.style.display = window.getComputedStyle(form2).display === 'none' ? 'block' : 'none'
      // 
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
    } else if (targetClicked.id == 'post') {
        let userSearched = document.getElementById('usernameSearch').value
        socialMedia.searchUserIfExist(userSearched)
    }
    else if (targetClicked == 'publicPost') {
        let post = document.getElementById('postPub').value
        postForm.style.display = 'none'
        socialMedia.publicPost(post)
    }

}
function createUser(username, bio) {
    let userAdded = {
        username: username,
        bio: bio
    }
    socialMedia.addUser(userAdded)
}