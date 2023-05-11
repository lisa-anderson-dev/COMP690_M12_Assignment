class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// Store artists/albums within an array
const myAlbums = [
    {artist: 'Operation Ivy', title: 'Energy'},
    {artist: 'Blink 182', title: 'Dude Ranch'},
    {artist: 'New Found Glory', title: 'Sticks and Stones'},
    {artist: 'Nirvana', title: 'Nevermind'},
    {artist: 'Linkin Park', title: 'Hybrid Theory'},
    {artist: 'Foo Fighters', title: 'The Colour and the Shape'},
    {artist: 'Green Day', title: 'Dookie'},
    {artist: 'Pearl Jam', title: 'Ten'},
    {artist: 'REM', title: 'Automatic for the People'},
    {artist: 'U2', title: 'Achtung Baby'}
];

var jbox = new Jukebox()

// In code, iterate through the array and programmatically create new Album class instances based on each album within the array. You’ll also need to add these instances to the player.
myAlbums.forEach(album => jbox.addAlbum(new Album(album.artist, album.title)));

window.addEventListener('load', () => {
    let playList = document.getElementById('playList');
    let playBtn = document.getElementById('playBtn');
    let showFavoriteBtn = document.getElementById('showFavoriteBtn');
    let favoriteAlbum = document.getElementById('favoriteAlbum');

    // Bind that array to the drop down menu on the web page
    playList.HTML = '';
    myAlbums.forEach((album, i) => playList.innerHTML += `<option value="${i}">${album.artist} : ${album.title}</option>`);

    // When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. This will track that album as being played.
    playBtn.addEventListener('click', () => {
        jbox.albums[playList.value].play();
    });

    // When the user clicks the “show my favorite album” button, the favoriteAlbum() method should be called and the user’s favorite album based on number of plays should be displayed in the web page.
    showFavoriteBtn.addEventListener('click', () => {
        favoriteAlbum.innerHTML = jbox.favoriteAlbum();
    });
})
