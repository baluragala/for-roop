var GENRE_JAZZ = 0;
var GENRE_POP = 1;
var GENRE_ROCK = 2;
var FOLK = 3;
var Genre;
(function (Genre) {
    Genre[Genre["Jazz"] = 0] = "Jazz";
    Genre[Genre["Pop"] = 1] = "Pop";
    Genre[Genre["Techno"] = 2] = "Techno";
    Genre[Genre["Funk"] = 3] = "Funk";
})(Genre || (Genre = {}));
var Genre1;
(function (Genre1) {
    Genre1[Genre1["Jazz"] = 1000] = "Jazz";
    Genre1[Genre1["Pop"] = 1001] = "Pop";
    Genre1[Genre1["Techno"] = 1002] = "Techno";
    Genre1[Genre1["Funk"] = 1003] = "Funk";
})(Genre1 || (Genre1 = {}));
var Genre2;
(function (Genre2) {
    Genre2[Genre2["Jazz"] = 1000] = "Jazz";
    Genre2[Genre2["Pop"] = 2000] = "Pop";
    Genre2[Genre2["Techno"] = 2001] = "Techno";
    Genre2[Genre2["Funk"] = 4000] = "Funk";
})(Genre2 || (Genre2 = {}));
var songeGenre = Genre1.Jazz;
console.log(songeGenre);
