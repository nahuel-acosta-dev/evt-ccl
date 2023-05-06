import Image from 'next/image';
import { Button, Col, Row } from "react-bootstrap";
import Puerta from '../img/puerta.svg';
import Entrada from '../img/entrada.svg';
import Estadio from '../img/estadio.svg';

const Meetings = () => {
    return(
        //SECTION AGGREGATED MEETING
        <>
            <Row className="meetings text-center justify-content-center">
                <h2 className="fw-bold title-meetings">NUESTRAS REUNIONES</h2>

                <Col xs={1} sm={2} md={3}/>
                    <Col>
                        <p className="text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            <span className="text-center">standard dummy text ever since the 1500s.</span>
                        </p>

                        <Row>
                            <Col>
                                <Image src={Estadio} alt="" height="85"/>
                                <h3 className="mt-5 fs-4 fw-bold">ESTADIO | CALLE FALSA 123</h3>
                                <p className="fs-5">
                                    Día 00:00hs.
                                    <br/>
                                    Día A Día 00:00 y 00:00hs.
                                    <br/>
                                    Día 00:00 y 00:00hs.
                                    <br/>
                                </p>
                                <Button className='rounded-pill btn-meetings border border-2 text-dark' 
                                variant="outline-light" size="lg">
                                    Ver Más
                                </Button>
                            </Col>
                            <Col>
                                <Image src={Estadio} alt="" height="85"/>
                                <h3 className="mt-5 fs-4 fw-bold">ESTADIO | CALLE FALSA 123</h3>
                                <p className="fs-5">
                                    Día 00:00hs.
                                    <br/>
                                    Día A Día 00:00 y 00:00hs.
                                    <br/>
                                    Día 00:00 y 00:00hs.
                                    <br/>
                                </p>
                                <Button className='rounded-pill btn-meetings border border-2 text-dark' 
                                variant="outline-light" size="lg">
                                    Ver Más
                                </Button>
                            </Col>

                        </Row>
                    </Col>
                <Col xs={1} sm={2} md={3}/>
            </Row>

        </>
    )
}

export default Meetings;