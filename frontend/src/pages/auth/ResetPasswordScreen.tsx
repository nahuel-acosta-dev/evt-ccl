import { ChangeEvent, FormEvent, useState } from "react";
import Auth from '../../components/auth/Auth';
import WithPrivateRoute from '../../hocs/auth/WithPrivateRoute';
import { useResetPasswordMutation } from '../../redux/features/auth/resetPasswordApiSlice';
import Layout from "../../hocs/Layout";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const ResetPasswordScreen = () => {
    const [requestSent, setRequestSent] = useState(false);
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [formData, setFormData] = useState({email: ''});
    const router = useRouter();

    const { email } = formData;
    console.log(email)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e:FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        try{
            const data = await resetPassword({email}).unwrap();
            console.log(data);
            setRequestSent(true);
        }catch(e: any){
            console.log('error')
        }
    };

    if (requestSent) {
        router.push('/');
    }

    return (
        <Layout>
            {
            isLoading ? 
                <div>
                    espere un momento...
                </div>
                :
            (
            <Row>
            <Col xs={1}></Col>
                <Col>
                    <Auth>
                    <p className="text-vanilla fs-5 fw-bolder">
                        Ingresa tu email y revisa tu bandeja de entrada.
                        Si tu usuario existe se te enviara un correo para cambiar tu contraseña.
                    </p>
                        <Form onSubmit={e => onSubmit(e)}>
                            <Form.Group className='form-group'>
                                <Form.Control
                                    className='form-control mt-3'
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    required
                                />
                            </Form.Group>
                            <Button className='btn btn-primary mt-4 rounded' type='submit'>
                                Reset Password
                            </Button>
                        </Form>
                    </Auth>
                </Col>
                <Col xs={1}></Col>
            </Row>)}
        </Layout>
    );
};

ResetPasswordScreen.Auth = WithPrivateRoute;

export default ResetPasswordScreen;