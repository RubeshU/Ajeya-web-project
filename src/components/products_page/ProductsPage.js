import React from 'react'
import Container from 'react-bootstrap/Container'
import CardComponent from './CardComponent'
import NavigationBar from '../NavigationBar'
import FooterSection from '../FooterSection'

function ProductsPage() {
    return (
        <div>
            <Container>
                <NavigationBar path="products"/>
                </Container>
            <Container>
               <CardComponent name="iSpark - Integrated Sales and Service CRM"/>
               {/* <ProductDescriptionPage name="iSpark - Integrated Sales and Service CRM" image="./logo-dark 1.png" /> */}
            </Container>
            <FooterSection />
        </div>
    )
}

export default ProductsPage;
