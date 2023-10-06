# BlackJack React applikation lavet med Vite

### Hvad kan programmet?
Funktionelt BlackJack spil med de mest kendte features fra et rigtigt spil BlackJack i kasinoerne (uden betting)..

### Instruktioner
* For at få programmet til at køre optimalt, skal du download [node.js](https://nodejs.org/en), og skrive følgende i terminalen for projektet:
* npm i
    * Det installerer de påkrævet ting for at køre projektet.
* npm run dev
    * Det kører programmet i et development environment.
* npm run build (til de nørdede)
    * Dette bygger projektet og derefter kan du køre det i et production environment.

### Spillets regler
* Du vinder hvis en af følgende krav er opfyldt:
    * Spillerens hånd giver 21 i alt.
    * Dealeres hånd giver over 21 i alt.
    * Dealerens hånd er lig med eller over 17 og spillerens hånd er højere, men stadig under 21.
* Du taber hvis en af følgende krav er opfyldt:
    * Spillerens hånd giver over 21 i alt.
    * Dealerens hånd giver 21 i alt.
    * Dealerens hånd er lig med eller over 17 og spillerens hånd er lavere
* Spillet afsluttet som uafgjort hvis følgende krav er opfyldt:
    * Spillerens hånd og dealerens hånd giver det samme.

### ToDo Liste
* ~~Tilføj logik bag stand funktionen.~~
* ~~Skjul dealerens første kort indtil spillet er afsluttet.~~
* Integrer en form for betting.
* Integrer LocalStorage eller anden form for datalagring, så spillet gemmes ved lukning af browser.

### Changelog
* Tilføj logik bag stand funktionen.
* Skjul dealerens første kort indtil spillet er afsluttet.

### Kendte bugs
* Efter 10 spil reloader spillet blankt, og man skal reload siden.

### Bug reporting
* Oplever du fejl i programmet, er du velkommen til at [raise et issue](https://github.com/Ezague/BlackJackReact/issues) her på github, så jeg bliver underrettet om given fejl.

### Forfatter
* [Ezague](https://github.com/Ezague)

Andre brugbare links:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) bruger [Babel](https://babeljs.io/) for hurtigere refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) bruger [SWC](https://swc.rs/) for hurtigere refresh
