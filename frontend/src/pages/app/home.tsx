import {useDispatch, useSelector} from 'react-redux';
import { selectCurrentToken } from '../../redux-cfg/features/auth/authSlice';
import Layout from "../../hocs/Layout";
import WithPrivateRoute from '../../hocs/auth/WithPrivateRoute';
const Home = () => {

    //const token = useSelector(selectCurrentToken);
    //console.log("este es el token: " + token)

    
    return(
        <Layout>
            Entraste a la pagina
        </Layout>
    )
}
Home.Auth = WithPrivateRoute;
export default Home;