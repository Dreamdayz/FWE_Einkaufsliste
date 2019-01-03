# Einkaufsliste

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.


Bei diesem Projekt handelt es sich um das FrontEnd für die ersten Hausaufgabe. In diesem Projekt
ist bereits das BackEnd, sowie Frontend und diverse (notwendige) Änderungen enthalten!

Die Funktionalität **Offline** zu betreiben ist leider nicht enthalten!

## Installation
Als erstet müssen folgende Bibliotheken für das Backend, sowie Frontend installiert werden:
### Backend:

- npm install express --save
- npm install json2csv
- npm install request
- npm install mocha --save-dev
- npm install supertest --save-dev
- npm install body-parser
- npm install request-promise
- npm install mongoose

### Frontend:

- npm install -g @angular/cli
- npm install --save-dev @angular-devkit/build-angular

## Bedienungsanleitung
#### BackEnd:

Zum starten des Backends folgendes Kommando ausführen:
```
npm start
```
**Der MongoDB Server muss bei Bedarf angepasst werden. Siehe _server.js_! (Von Werk aus verwendet
MongoDB als Adresse localhost:27017!)**

### Frontend:

Zum starten des Frontends:
```
ng serve
```
Anschließend kann man zur Startseite   `http://localhost:4200/` navigieren.

## Funktionalitäten:
### Listenansicht

Die Einträge sind in einem Tabellenformat angezeigt und jede Spalte wurde betitelt.
Durch drücken auf auf eine Spalte gelangt man in die Detailansicht.
![screenshot_detail](https://i.imgur.com/72874uk.png)

### Detailansicht
![screenshot_detail](https://i.imgur.com/2XSXOnG.png)

### Zusatzfeature
Das Zusatzfeature befindet sich auf der Detailansichtsseite. Es handelt sich hierbei um eine Rezeptideen Sammlung.
![screenshot_feature](https://i.imgur.com/Y07qQ9y.png)
