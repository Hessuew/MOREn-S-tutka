# MOREn Säätutka
Ennakkotehtävä 

Tein sovelluksen käyttäen framework:nä vue:a ja siihen lisäosia vuex ja vuetify.

## Käytön helppous ja tietojen kattavuus

Sovellus toimii kokonaisuudessaan ja kaikki tarvittavat tiedot tulevat käyttäjälle helposti nähtäville 
(yhtä puutetta lukuunottamatta, josta mainitse puutteissa).

Kokonaisuuden pitäisi mahdollistaa haluttaessa sovelluksen hyvät jatkokehitysmahdollisuudet.
View:t, komponentit, store ja tyylit on jaettu selkeästi osiin, jotta niitä pystyy tarkastelemaan helposti.
Jos komponentteja tai muitakin osia olisis tullut jakaa vielä enemmän ja pienempiin osiin, sen tekeminen 
jatkokehityksen ei pitäisi olla vaikeaa.

## Puuttuvaa/vajaata

Sain tehtyä kaiken ennakkotehtävästä, kuitenkin pari muutosta olisi tarpeen:

### Hetkellisen sään haku ei palauta rajapinnasta ymmärtääkseni sademäärää 
(ainakaan jos oikein ymmärsin)

Minulla oli jo parsiminen tehty myös sademäärälle, mutta sen puutteen vuoksi rajapinnan vastauksessa (paikkakunnan hetkellisen sää haku id: pohjalta esim. http://api.openweathermap.org/data/2.5/weather?id=634964&units=metric&appid=) kopioin hetkellisen sademärään 
3h välisen ennusteen ensimmäisesestä sademäärästä.

### Testit eivät ole testattu

Yritin ladata Jest ja Vue Test Utils testaustyökaluja, mutta en saanut ladattua Jest:ä (lataus keskeytyi tiettyyn kohtaan).
Kirjoitin kuitenkin yhden testin ja lisäsin asennusohjeeseen Jest ja Vue Test Utils latausten asennus scriptit.

## Project setup
```
npm install
npm install vuetify
npm install vuex
npm install axios
npm I axios-extensions -S
npm install --save-dev jest
vue add @vue/unit-jest

```

### Compiles and hot-reloads for development
```
npm run serve
```
