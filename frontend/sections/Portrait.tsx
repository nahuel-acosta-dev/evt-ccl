import Portraits from "../components/others/Portraits";
import { ActivityFour, ActivityOne, ActivityThree, ActivityTwo } from "../constants/portraits";

const Portrait = () => {

    return(
        <>
        
            <Portraits children={""} activity={1} portraits={ActivityOne}/>
            <Portraits children={""} activity={2} portraits={ActivityTwo}/>
            <Portraits children={""} activity={3} portraits={ActivityThree}/>
            <Portraits children={""} activity={4} portraits={ActivityFour}/>
        </>
    )
}

export default Portrait;