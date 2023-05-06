import Image from 'next/image';
import Audience from '../../img/carrousel/audiencia.jpg'
import Hand from '../../img/carrousel/hand.jpg'
import Concert from '../../img/carrousel/concert.jpg'
import { Button} from 'react-bootstrap';
import Icons from './Icons';

const Carrousel = () => {
  return (
  <div id="carouselExampleFade" className="carousel slide carousel-fade rounded-end-circle" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active rounded-end-circle">
          <Image src={Concert} className="d-block w-100" alt="..."/>
          <div className="carousel-caption dd-sm-block">
          <Button className='rounded-pill btn-carousel border border-2' variant="outline-light" size="lg">Más Info</Button>
          <Icons/>
          </div>

        </div>
        <div className="carousel-item">
          <Image src={Hand} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-sm-block">
          <Button className='rounded-pill btn-carousel border border-2' variant="outline-light" size="lg">Más Info</Button>
          <Icons/>
          </div>

        </div>
        <div className="carousel-item">
          <Image src={Audience} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-sm-block">
            <Button className='rounded-pill btn-carousel border border-2' 
            variant="outline-light" size="lg">
              Más Info
            </Button>
            <Icons/>
          </div>

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>
  );
}

export default Carrousel;