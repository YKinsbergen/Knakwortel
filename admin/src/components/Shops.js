
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'



export default function Shops(props) {
  return (
    <div>
      <div class="pt-3 pb-2 mb-3">
        <h2>Shops (Verkooppunten)</h2>
        <input type="file" name="shopsCsv" id="shopsCsv" onChange={props.addShopsOnChange}/>
          <p className="text-muted"><small>Voeg batch van shops toe via CSV file (format: naam;adres;1234XX;stad;googleMaps URL;latitude;longitude)</small></p>

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
                  <td>{shop.id}</td>
                  <td>{shop.storeName}</td>
                  <td>{shop.address}</td>

                  <td>{shop.postcode}</td>

                  <td>{shop.latitude}</td>
                  <td>{shop.longitude}</td>
                  <td><button onClick={() => {
                    props.handleShopDelete(shop.id)
                  }}
                  class="btn btn-outline">Delete</button></td>
                  <tb></tb>
                </tr>  
                )}

              </tbody>
            </table>
          </div>
        </div>
  )
}