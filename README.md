# MOREn Säätutka
Ennakkotehtävä 

Tein sovelluksen käyttäen framework:nä vue:a ja siihen lisäosian vuex ja vuetify.

## Käytön helppous ja tietojen kattavuus

Sovellus toimii kokonaisuudessaan ja kaikki tarvittavat tiedot tulevat käyttäjälle helposti nähtäville 
(yhtä puutetta lukuunottamatta, josta mainitse puutteissa).

Kokonaisuuden pitäisi mahdollistaa haluttaessa sovelluksen hyvät jatkokehitysmahdollisuudet.
View:t, komponentit, store ja tyylit on jaettu selkeästi osiin, jotta niitä pystyy tarkastelemaan helposti.

## Puuttuvaa/vajaata

Sain tehtyä kaiken ennakkotehtävästä, kuitenkin pari modifikaatiota olisi tarpeen:

### Hetkellisen sään haku ei palauta rajapinnasta ymmärtääkseni sademäärää 
(ainakaan jos oikein ymmärsin)

Minulla oli jo parsiminen tehty myös sademäärälle, mutta sen puutteen vuoksi kopioin hetkellisen sademärään 
3h välisen ennusteen ensimmäisesestä sademäärästä.

### Testit eivät ole testattu

Yritin ladata Jest ja Vue Test Utils testaustyökaluja, mutta Jest ei suostunut latautumaan (latasi siis pitkään ilman mitään etenemistä).
Kirjoitin kuitenkin yhden testin ja lisäsin asennusohjeeseen molempien työkalujen latauksen asennus scriptit.

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
