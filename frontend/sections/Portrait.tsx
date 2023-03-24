import Portraits from "../components/others/Portraits";
import { ActivityFour, ActivityOne, ActivityThree, ActivityTwo } from "../constants/portraits";

const Portrait = () => {

    return(
        <>
        
            {/* eslint-disable-next-line react/no-children-prop*/}
            <Portraits children={""} activity={1} portraits={ActivityOne}/>
            {/* eslint-disable-next-line react/no-children-prop*/}
            <Portraits children={""} activity={2} portraits={ActivityTwo}/>
            {/* eslint-disable-next-line react/no-children-prop*/}
            <Portraits children={""} activity={3} portraits={ActivityThree}/>
            {/* eslint-disable-next-line react/no-children-prop*/}
            <Portraits children={""} activity={4} portraits={ActivityFour}/>
        </>
    )
}

export default Portrait;