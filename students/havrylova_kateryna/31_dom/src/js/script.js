var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

const list = document.createElement('ol');
console.log(list);

document.body.prepend(list);
list.setAttribute('type', 1);

for (let i = 0; i < playList.length; i++) {
    let listItem = document.createElement('li');
    listItem.setAttribute('value', i + 1);

    let author = document.createElement('strong');
    author.textContent = 'Author: ';
    listItem.append(author);
    listItem.append(document.createTextNode(playList[i].author + ','));

    let br = document.createElement('br');
    listItem.append(br);

    let song = document.createElement('strong');
    song.textContent = 'Song: ';
    listItem.append(song);
    listItem.append(document.createTextNode(playList[i].song + ';'));

    list.append(listItem);
}
