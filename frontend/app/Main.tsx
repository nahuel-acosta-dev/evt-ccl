import { Col, Container, Row } from "react-bootstrap";
import Carrousel from "../components/others/Carrousel";
import Layout from "../hocs/Layout";
import Details from "../sections/Details";
import Grid from "../components/others/Grid";
import Portrait from "../sections/Portrait";
import Date from "../sections/Date";
import OtherEvents from "../sections/OtherEvents";

const Main = () => {
   return (
        <Layout>
            <div className="home_carousel text-center mb-1 bg-transparent">
                <Carrousel/>
    
                <a className="fs-5 text-center carousel_text text-decoration-none fw-bold text-dark bg-transparent"
                href="https://www.youtube.com/live/kDnLsqON9yg?feature=share" target="_blank"
                rel="noreferrer"
                >
                    {/*<img src={Youtube} height="20px" alt="..."/>   Ver nuestro mensaje de bienvenida - Llegada   */ }
                </a>
                
            </div>
            <Container fluid>
                <Row className="text-start justify-content-center details mb-5">
                    <Col xs={0} md={1} lg={2}/>
                        <Col xs={12} md={10} lg={8}>
                            {/* DETAILS */}
                            <Details/>

                            {/* PORTRAITS */}
                            <Portrait />
                            
                            {/* GRID */}
                            <Grid />

                            {/* SENTENCE */}
                            <Row>
                                <Col xs={1} sm={2}/>
                                    <Col xs={10} sm={8}>
                                        <p className="fst-italic fw-bold fs-2 paragraph text-center mt-5">
                                            &quot;Lorem Ipsum is simply dummy text of the 
                                            printing and typesetting industry&ldquot;
                                        </p>
                                        <p className="fst-italic fw-bold fs-2 paragraph text-center">
                                            Since the 1500s
                                        </p>
                                    </Col>
                                <Col xs={1} sm={2}/>
                            </Row>

                            <Date/>

                            <p className="fs-1 fw-bold text-dark">OBTEN TU ENTRADA</p>
                            <p className="fw-bold text-dark mt-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a 
                                type specimen book.
                            </p>
                            <a className="btn btn-info btn-lg rounded-pill mt-4 mb-5" 
                            href="https://wa.link/fptrcg" target="_blank" rel="noreferrer">
                                COMPRAR ENTRADA <i className="bi bi-whatsapp"></i>
                            </a>

                            <p className="fst-italic mt-2 mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <hr className="mb-5"/>

                            <OtherEvents/>

                        </Col>
                    <Col xs={0} md={1} lg={2}/>
                </Row>
            </Container>
        </Layout>
    )
}

export default Main;