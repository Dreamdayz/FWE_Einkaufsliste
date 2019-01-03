## FWE_Einkaufsliste Backend
Ziel dieser App ist es, Artikel die wir für den täglichen oder wöchentlichen Einkauf benötigen
zu sammeln und dadurch stets den Überblick zu behalten.


## Tech/Bibliotheken
<b>Built with</b>
- [Express](https://www.npmjs.com/package/express)
- [Json2csv](https://www.npmjs.com/package/json2csv)
- [Request](https://www.npmjs.com/package/request)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [request-promise](https://www.npmjs.com/package/request-promise)

## Installation
Als erstet müssen folgende Bibliotheken installieren:

- npm install express --save
- npm install json2csv
- npm install request
- npm install mocha --save-dev
- npm install supertest --save-dev
- npm install body-parser
- npm install request-promise
- npm install mongoose

**Der MongoDB Server muss bei Bedarf angepasst werden. Siehe _server.js_! (Von Werk aus verwendet
MongoDB als Adresse localhost:27017!)**


```
npm start
```

## API Reference
### GET
* Anfragen einzelner Daten:

Diese Funktion gibt ein einzelnes eingetragen Produkte aus der MongoDB aus. Die Ausgabe erfolgt mittels JSON und beinhaltet alle
    eingetragenen Werte für diesen Eintrag.
```    
localhost:3000/product/<id>
```  

  * **id** : ObjectID des gewünschten MongoDB Eintrages
  
* Anfragen aller Daten:

    Ohne Spezifierung einer ID werden alle Einträge in der Datenbank ausgegeben.
```
      localhost:3000/product
```
* Export aller Daten als CSV:

    Diese Funktion gibt einen einzelnen Eintrag aus der MongoDB aus. Die Ausgabe erfolgt statt JSON über eine Exportierung
    als CSV Datei (Tabelle). Hierbei wird pro Zeile ein Eintrag ausgegeben.
```
      localhost:3000/product/download/csv
```

### POST
* Erstellen eines Eintrages:

    Mit dieser Funktion ist es möglich einzelne Einträge in der MongoDB Datenbank anzulegen. Die einzelnen Parameter
    müssen im **Body** als Object eingetragen werden und an den Server geschickt werden.
```
     localhost:3000/product
```
### PATCH
* Bearbeiten einzelner Daten:

    Diese Funktion ermöglicht das bearbeiten bzw. updaten eines Eintrages in der Datenbank. Der zu editierende Eintrag
    kann spezifiert werden durch eine mitgelieferte ObjectID. Die Werte die geändert werden sollen, müssen im **Body**
    angegeben werden.
```
      localhost:3000/product/<id>
```      
   **id** : ObjectID des gewünschten MongoDB Eintrages 
  
### DEL
* Löschen einzelnder Einträge:

    Diese Funktion ermöglicht das Löschen einzelnder Einträge mittels ObjectID.
```    
      localhost:3000/product/<id>
```      
   **id** : ObjectID des gewünschten MongoDB Eintrages
  
### _**Extra**_
* Gericht rezepte anzeigen:

    Diese Funktion gibt allgemeine Rezeptideen zu einer genannten Zutat aus. Die Zutat muss als parameter mitgeschickt werden (GET).
```    
      localhost:3000/recipe?name=chicken
```
## Testing
Zum Testen wurde Mocha und Supertest verwendet. 

folgenden Befehl ausführen zum Testen:

```
npm test
```

