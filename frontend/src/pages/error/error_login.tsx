import Layout from "../../hocs/Layout";

const ErrorLogin = () => {
    //debemos redireccionar a login o / nuevamente ya que el logueo fallo

    return(
        <Layout>
            <div className="text-white fs-1 fw-bold mt-5">
                <p>Error trying to log on</p>
            </div>
        </Layout>
    )
}


export default ErrorLogin;