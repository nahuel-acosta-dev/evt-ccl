import Image from 'next/image';
import { Col, Row } from "react-bootstrap";
import BlackFriday from '../../img/black-friday.png';
import BlackFridayRedi from '../../img/black-friday-redi.png';

const Grid = () => {

    return(
        <Row>
            <Col xs={6}>
                <Row>
                    <Col xs={12}>
                        <Image src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                </Row>
            </Col>
            <Col xs={6}>
                <Row>
                    <Col xs={{span:12}}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2"/>
                    </Col>
                    <Col xs={6}>
                        <Image src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={6}>
                        <Image src={BlackFriday} alt="" className="img-fluid mb-4"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                    <Col xs={12}>
                        <Image src={BlackFridayRedi} alt="" className="img-fluid mb-2 mt-1"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Grid;