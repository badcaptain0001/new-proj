import React from 'react'

function Header() {
  return (
    <div>
      <head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCa1DfPATl3xccYzQug-XQt3wJKxu33_HQ&libraries=places,drawing,geometry,visualization`}
        />
      </head>
    </div>
  )
}

export default Header