import Image from 'next/image';
import { FC } from "react";
import { PropsDetails } from "../../src/types/generics";
import { Col, Row } from "react-bootstrap";

const Portraits: FC<PropsDetails> = ({
    children, 
    activity,
    portraits
}) => {
    return(
        <>
            <h3 className="fw-bolder mb-5 mt-5">
                <strong>ACTIVIDAD {activity}</strong>
            </h3>
            <Row className="mb-5">
                {portraits.map((portrait, i) => (
                    <Col sm={4} key={i}>
                        <Image src={portrait.img} alt={portrait.alt} className="img-fluid mb-5"/>
                    </Col>
                ))}
                {/*children*/}
            </Row>
            
        </>
    )
}

export default Portraits;