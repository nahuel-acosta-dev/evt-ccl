import { Table } from "react-bootstrap";
import {dayOne} from '../constants/dates';
import Dates from "../components/others/Dates";

const Date = () => {


    return(
        <>
            <h3 className="mt-5 mb-5">HORARIOS</h3>

            <Dates children="" day="DÍA 01/01" dates={dayOne}/>

            <p className="mt-5 mb-5 fs-1 fw-bold">
                Día 01/01 – Día 02/02
            </p>

            <Dates children="" day="DÍA 01/01" dates={dayOne}/>
            <Dates children="" day="DÍA 01/01" dates={dayOne}/>


        </>
    )
}
export default Date;