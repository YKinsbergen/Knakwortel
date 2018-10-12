# KNAKWORTEL WEBSITE

## Handover README

### Het hele project omvat een aantal verschillende technieken die we hieronder beschrijven

### API/ Database.
  - Map `Knakwortel/server`
  - Database is PostgreSQL 
  - API is geschreven in Typescript JS, die draait op een NodeJS Koa server met de `routing-controllers` package en TypeORM als DB manager.
  - De services kunnen als volgt worden opgestart om lokaal verder te ontwikkelen/ testen:
   - Vanuit de `server` map in terminal type: `yarn install`. Wanneer dit gedaan is `yarn start`. De services zijn nu gestart, tabellen worden aangemaakt. 
   - We geven via een ander kanaal een .SQL bestand met INSERT statements die de database vullen met de content zoals die nu opgeleverd is. Login gegevens voor deze test-user sturen we daarbij ook mee.
  - Publiek toegangkelijke RESTFUL Endpoints die de website benaderd om de content uit de database te halen zijn: 
    - `/pages/:id` Het ID van de homepage is op dit moment `1`
    - `/recipes`
    - `/recipes/:id`
    - `/shops`
    - `/shops/:postcode`
    
     
### Het CMS systeem
  - Map `Knakwortel/admin`
  - Is een react-redux app.
  - Is gestyled met bootstrapCDN.
  - Gebruikt alleen server-side authorisation/validation.
  - Maakt gebruik van dezelfde API als hierboven beschreven met authorised endpoints.
  - Gebruikt een cloud-based bucket-service genaamd `Cloudinary`. Hier worden images naar verstuurd en URLs gefetched en opgeslagen in de database.

### De slotmachine 
  - Map `Knakwortel/slotmachine`
  - Is een react-redux app.
  - Verzameld alle logica in /src/components/slotmachine
  - Gebruikt een pseudo-willekeurig algoritme die vereist dat er een minimaal aantal recepten en toppings zijn. De CMS beperkt het deleten van deze velden wanneer ze het minimum kunnen overschrijden.
  - Vereist een database gevuld met deze minimum aantallen om te functioneren zonder errors. 

### De winkelzoeker
  - Map `Knakwortel/storelocator`
  - Gestyled met Reactstrap. 
  - Is een React-Redux app, er wordt gebruik gemaakt van de library React-leaflet. Gebaseerd op OpenStreetMap. 


### De publieke website
- Map `Knakwortel/website`.
- Draait op een NodeJS Koa server met PUG Middleware die API data injecteert in HTML Templates. Maakt verbinding met de API via Axios.
- Is gestyled met BootstrapCDN.
- In terminal, in de map `website`, type: `yarn install`. Wanneer dit gedaan is `yarn dev`. Dit start Nodemon, die opgeslagen wijzigingen in het bestand monitort. Echter werkt dit niet bij pug-bestanden; wanneer een pug-bestand aagepast wordt, kunnen de wijzigingen doorgevoerd en zichtbaar gemaakt worden door het bestand op te slaan de nodemon server restarten met het command `rs` in de terminal. De webpagina dient daarna herladen te worden.
- Alle content wordt uit de database gehaald en op de juiste plek op de website geladen door het find-algoritme zoekt op de juiste tag in elke section. Daarom is het van belang om de tags niet aan te passen waneer content gewijzigd wordt, of als de tag in de database gewijzigd moet worden, dit ook in de code aan te passen. 

## Fixes/missende onderdelen voor definitieve live deployment naar knakwortel.nl

### Trui bestellingen
- Het bestellen van truien binnen de website is mogelijk. 
- Bestellingen van truien worden opgeslagen in de database samen met de ingevulde gegevens van gebruikers. Hierdoor is het mogelijk dat er een potentieel conflict is met de AVG(Algemene Verordening Gegevensbescherming)-wet. 
- Er is nog geen link met een betaalsysteem. 

### Email formulier
- Het contactformulier verstuurt nog geen email. 

### Beveiliging CMS-systeem
- We kunnen geen absolute garantie geven dat het huidige CMS-systeem zoals het geïmplementeerd is volledig hacker-proof is. Wachtwoorden worden door `bcrypt` package gehashed (10 saltrounds). Bij succesvolle login geeft de API een JWT-key terug waarin de ingelogde userId is opgeslagen. Een JWT kan door ieder ontcijferd worden, maar nooit veranderd. 
- Om deze redenen raden wij aan een senior developer de code te laten reviewen voordat dit live ingezet gaat worden.

- TypeORM voorkomt SQL injection in de login form.
- Er is geen limiet op het aantal pogingen dat kan worden gedaan om in te loggen.
