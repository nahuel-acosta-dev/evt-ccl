import Image from 'next/image';
import { Col, Row } from "react-bootstrap";
import Audience from '../img/audience.jpg';
import Portraits from "../../components/others/Portraits";
import { ActivityFour, ActivityOne, ActivityThree, ActivityTwo } from "../../constants/portraits";
import Grid from "../../components/others/Grid";

const Details = () => {


    return(
            <>
                <h2 className="fw-bold fs-1 text-dark mb-5">
                    Congreso Internacional 
                    de Personas PROVINCIA 2023 
                    «Frase»
                </h2>
                <div className="text-details paragraph">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. 
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                        recently with desktop publishing software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. 
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting.
                    </p>
                </div>

                <figure className="mt-2">
                    <Image 
                        src={Audience} 
                        className="img-fluid" 
                        alt=""
                    />
                </figure>

                <div className="ratio ratio-16x9 mb-3 details__video">
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" 
                    title="YouTube video" allowFullScreen></iframe>
                </div>
            </>
    )
}

export default Details;