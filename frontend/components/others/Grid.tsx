import { Col, Row } from "react-bootstrap";
import BlackFriday from '../../img/black-friday.png';
import BlackFridayRedi from '../../img/black-friday-redi.png';

const Grid = () => {

    return(
        <Row>
            <Col xs={6}>
                <Row>
                    <Col xs={12}>
                        <img src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                </Row>
            </Col>
            <Col xs={6}>
                <Row>
                    <Col xs={{span:12}}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2"/>
                    </Col>
                    <Col xs={6}>
                        <img src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={6}>
                        <img src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <img src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Grid;