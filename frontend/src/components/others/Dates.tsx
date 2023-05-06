import { Table } from "react-bootstrap";
import { PropsDates } from "../../types/generics";
import { FC } from "react";

const Dates: FC<PropsDates> = ({children, day, dates}) => {

    return(
        <>
            <p className="fs-1 fw-bold mt-5">{day}</p>

            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dates.map((date, i) => (
                            <tr key={i} className={ i % 2 === 0 ? "dates-tr":""}>
                                <td>{date.region}</td>
                                <td> </td>
                                <td> </td>
                                <td> </td>
                                <td>{date.hour}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Dates;