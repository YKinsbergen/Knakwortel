
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'



export default function Shops(props) {
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Shops (Verkooppunten)</h2>
        <input type="file" name="shopsCsv" id="shopsCsv" onChange={props.addShopsOnChange}/>
          <br/><br/>
          <p className="instructiesShopUploadTitle">
            <small>
              <b>Instructies voor het toevoegen van nieuwe winkels.</b>
            </small>
          </p>
          <p className="instructiesShopUploadTitle"><small><b>Optie 1: Creëer een CSV bestand</b></small></p>
            <ol>
              <li>Creëer een nieuw CSV bestand (via Excel of LibreOffice bv)</li>
              <li>Voeg voor elke nieuwe winkel een rij toe (de eerste rij is dus de eerste winkel, geen headers o.i.d.)<br/></li>
                <ul>
                  <li>Houdt de volgende kolomvolgorde strict aan: <i><b>naam;adres;1234XX;stad;googleMapsURL;latitude;longitude.</b></i> Handig om te weten:</li>
                    <ul>
                    <li>Postcode: 1234AB (Nederland), 1234 (België)</li>
              <li>Latitude & Longitude zijn op twee manieren te achterhalen:
                <ul>
                <li>In de GoogleMaps URL (vb: https://www.google.com/maps/place/Albert+Heijn/@<b>51.9327044,4.4712971</b>,17z/da...)</li>
                <li>In GoogleMaps, klik rechts ter hoogte van de winkel, en klik op "What's here"/"Wat is hier". De coordinaten verschijnen direct in het juiste formaat.</li>
                </ul>
              </li>
                    </ul>
                </ul>
              <li>Sla het bestand op met puntkomma als delimitator</li>
              <li>Upload het bestand via bovenstaande knop "Choose File". De winkels worden direct aan de lijst toegevoegd.</li>
            </ol>
          <p className="instructiesShopUploadTitle"><small><b>Optie 2 (back up optie): Via het aangeleverde voorbeeldfile</b></small></p>
            
            <ol>
              <li> Creëer een kopie van het aangeleverde .CSV voorbeeldbestand</li>
                <ul>
                  <li>NB: Bewaar het originele (en werkende) .CSV bestand voor de zekerheid ter referentie</li>
                </ul>
              <li>Open het nieuwe bestand met een text editor (e.g. notepad, notepad++, atom, of visual studio code)</li>
                <ul>
                  <li>Laat het formaat bij onderstaande instructies ongewijzigd, met puntkomma's als scheidingsteken en inputvolgorde als volgt:<br/>
                  <i><b>naam;adres;1234XX;stad;googleMapsURL;latitude;longitude</b></i></li>
                </ul>
            <li>Vervang voorbeeldshops met de gewenste nieuwe verkooppunten. Handig om te weten:</li>
            <li>Sla het bestand op en selecteer het via bovenstaande knop "Choose File". De winkels worden direct aan de lijst toegevoegd.</li>
            </ol>

      </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Naam</th>
                  <th>Adres</th>
                  <th>Postcode</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {props.shops.map(shop => 
                <tr key={shop.id}>
                  <td>link..</td>
                  <td>{shop.storeName}</td>
                  
                  <td>{shop.address}</td>

                  <td>{shop.postcode}</td>

                  <td>{shop.latitude}</td>
                  <td>{shop.longitude}</td>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}