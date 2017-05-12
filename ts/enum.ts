const GENRE_JAZZ=0;
const GENRE_POP=1;
const GENRE_ROCK=2;
const FOLK=3;

enum Genre { Jazz, Pop, Techno, Funk }
enum Genre1 { Jazz=1000, Pop, Techno, Funk }
enum Genre2 { Jazz=1000, Pop=2000, Techno=300, Funk=4000 }

let songGenre:Genre = Genre.Jazz;

console.log(songGenre);