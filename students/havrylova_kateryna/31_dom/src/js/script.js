const playList = [
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



function generateList(playList) {
    const ol = document.createElement('ol');
    ol.type = '1';

    playList.forEach((item, index) => {
        const li = document.createElement('li');
        li.value = index + 1;

        const author = document.createElement('strong');
        author.textContent = 'Author: ';

        const authorText = document.createTextNode(item.author);
        const br = document.createElement('br');

        const song = document.createElement('strong');
        song.textContent = 'Song: ';

        const songText = document.createTextNode(item.song);

        li.append(author);
        li.append(authorText);
        li.append(br);
        li.append(song);
        li.append(songText);

        ol.append(li);
    });

    return ol;
}

document.body.prepend(generateList(playList));

