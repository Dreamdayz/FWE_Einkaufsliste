# Einkaufsliste

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.
Um genauers über das Backend zu erfahren, solltest du in der Repository [747312-ha1](https://code.fbi.h-da.de/istkeogie/fwe-ws18-19-747312-ha1)
nachschauen. 

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

###Frontend:

Zum starten des Frontends:
```
ng serve
```
Anschließend kann man zur Startseite   `http://localhost:4200/` navigieren.

