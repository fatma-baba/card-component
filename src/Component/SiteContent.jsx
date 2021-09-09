import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import ParagraphComponent from './ParagraphComponent'
import CardComponent from "./CardComponent";
const SiteContent = () => {
    return (
        <>
            <Row>
                <Col> <NavbarComponent /></Col>
            </Row>
            <Row>
                <Col> <ParagraphComponent /> </Col>
                <Col><CardComponent /></Col>
                <Col></Col>
            </Row>

    
        </>
    )
}
export default SiteContent