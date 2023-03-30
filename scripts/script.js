const lightbox2 = GLightbox({
    selector: '.glightbox2',
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    plyr: {
        css: 'https://cdn.plyr.io/3.5.6/plyr.css', // Default not required to include
        js: 'https://cdn.plyr.io/3.5.6/plyr.js', // Default not required to include
        config: {
            ratio: '16:9', // or '4:3'
            muted: false,
            hideControls: true,
            youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
            },
            vimeo: {
                byline: false,
                portrait: false,
                title: false,
                speed: true,
                transparent: false
            }
        }
    }
});
const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true
});

function menu(name) {
    var main = document.getElementsByClassName("main");

    for (let m of main) {
        m.style.display = 'none';
    }

    var page = document.getElementById(name);
    page.style.display = 'block';
}


var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function czas() {
    if (!document.write)

        var godzina, minuty, sekundy, dzien, licz_dzien, miesiac, dzisiaj, rok, tekst_miesiac, tekst_dzien;
    dzisiaj = new Date();
    godzina = dzisiaj.getHours();
    minuty = dzisiaj.getMinutes();
    sekundy = dzisiaj.getSeconds();
    rok = dzisiaj.getFullYear();
    dzien = dzisiaj.getDate();
    licz_dzien = dzisiaj.getDay();
    if (licz_dzien == 0) { tekst_dzien = "Niedziela" }
    if (licz_dzien == 1) { tekst_dzien = "Poniedziałek" }
    if (licz_dzien == 2) { tekst_dzien = "Wtorek" }
    if (licz_dzien == 3) { tekst_dzien = "Środa" }
    if (licz_dzien == 4) { tekst_dzien = "Czwartek" }
    if (licz_dzien == 5) { tekst_dzien = "Piątek" }
    if (licz_dzien == 6) { tekst_dzien = "Sobota" }
    miesiac = dzisiaj.getMonth();
    if (miesiac == 0) { tekst_miesiac = "styczeń" }
    if (miesiac == 1) { tekst_miesiac = "luty" }
    if (miesiac == 2) { tekst_miesiac = "marzec" }
    if (miesiac == 3) { tekst_miesiac = "kwiecień" }
    if (miesiac == 4) { tekst_miesiac = "maj" }
    if (miesiac == 5) { tekst_miesiac = "czerwiec" }
    if (miesiac == 6) { tekst_miesiac = "lipiec" }
    if (miesiac == 7) { tekst_miesiac = "sierpień" }
    if (miesiac == 8) { tekst_miesiac = "wrzesień" }
    if (miesiac == 9) { tekst_miesiac = "październik" }
    if (miesiac == 10) { tekst_miesiac = "listopad" }
    if (miesiac == 11) { tekst_miesiac = "grudzień" }
    if (dzien < 10) { dzien = "0" + dzien; }
    if (godzina < 10) { godzina = "0" + godzina; }
    if (minuty < 10) { minuty = "0" + minuty; }
    if (sekundy < 10) { sekundy = "0" + sekundy; }
    pelnyczas = tekst_dzien + ", " + dzien + "&nbsp;" + tekst_miesiac + "&nbsp;" + rok + " "
        + godzina + ":" + minuty + ":" + sekundy;
    if (document.layers) {
        document.layers.Data.document.write(pelnyczas)
        document.layers.Data.document.close()
    }

    Data.innerHTML = pelnyczas
    setTimeout("czas()", 500)
}


