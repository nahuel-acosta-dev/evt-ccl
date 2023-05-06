import { Col, Row } from 'react-bootstrap';

const Icons = () => {

    return(
        <Row className="text-end mt-5">
            <Col xs={1} sm={2} lg={7}/>
                <Col>
                    <Row className="flex-row social-icons">
                        <Col xs={3}>
                            <a className="btn btn-dark m-3 rounded-circle cont__icon" 
                            href="https://www.youtube.com/@kexp" target="_blank" rel="noreferrer">
                                <i className="bi bi-youtube icon"></i>
                            </a>
                        </Col>
                        <Col xs={3}>
                            <a className="btn btn-dark m-3 rounded-circle cont__icon" 
                            href="https://www.instagram.com/mapacheband/" target="_blank" rel="noreferrer">
                                <i className="bi bi-instagram icon"></i>
                            </a>
                        </Col>
                        <Col xs={3}>
                            <a className="btn btn-dark m-3 rounded-circle cont__icon" 
                            href="https://twitter.com/mapache" target="_blank" rel="noreferrer">
                                <i className="bi bi-twitter icon"></i>
                            </a>
                        </Col>
                        <Col xs={3}>
                            <a className="btn btn-dark m-3 
                            rounded-pill cont__icon mt-3 me-sm-0 me-xs-2" href="https://mpago.la/2y6QJos" 
                            target="_blank" rel="noreferrer">
                                <span>Ayudanos</span>
                            </a>
                        </Col>
                    </Row>
                </Col>
            <Col xs={1} lg={1}/>
        </Row>
    )
}

export default Icons;