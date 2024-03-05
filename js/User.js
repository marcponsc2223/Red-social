// Creació de Perfils d'Usuari:
// Implementa una classe User amb les propietats username, bio, followers i posts.
// Crea un mètode dins de la classe User per afegir publicacions al perfil de l'usuari.
// Implementa mètodes per afegir un nou perfil d'usuari, mostrar el perfil d'un usuari i permetre als usuaris seguir-se mútuament.

class User {
    constructor ({username, bio, followers = 0, post = null}) {
        this.username = username
        this.bio = bio
        this.followers = followers
        this.post = post
    }
    
    set setUsername(username) {
        this.username = username
    }
    set setBio(bio) {
        this.bio = bio
    }
    set setFollowers(followers) {
        this.followers = followers
    }
    set setPost(post) {
        this.post = post
        console.log('Post added correctly..');
    }
    get getFollowers() {
        return this.followers
    }
    get getProfile() {
        return `Username: "${this.username}" Bio: "${this.bio}" Followers: "${this.followers}" Post: "${this.post}" \n `
    }

}