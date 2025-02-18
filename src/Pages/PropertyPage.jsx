import React from 'react'
import PropertyHero from '../components/Property/PropertyHero'
import Description from '../components/Property/Description';
import Address from '../components/Property/Address';
import FloorPlans from '../components/Property/FloorPlans';
import Footer from '../components/Footer';
const PropertyPage = () => {
  return (
    <>
   <PropertyHero/>
   <Description/>
   <Address/>
   <FloorPlans/>
   {/* <Footer/> */}
    </>
    
  )
}

export default PropertyPage;