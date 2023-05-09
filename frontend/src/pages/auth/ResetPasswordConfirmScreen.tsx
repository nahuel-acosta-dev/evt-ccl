import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Auth from "../../components/auth/Auth";
import {useResetPasswordConfirmMutation} from '../../redux-cfg/features/auth/resetPasswordConfirmApiSlice';
import Layout from "../../hocs/Layout";
import { useRouter } from "next/router";

const ResetPasswordConfirmScreen = () => {
    const [requestSent, setRequestSent] = useState(false);
    const [resetPasswordConfirm, {isLoading}] = useResetPasswordConfirmMutation();
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });
    const router = useRouter();
    const {uid, token} = router.query;

    const { new_password, re_new_password } = formData;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setFormData(
        { ...formData, [e.target.name]: e.target.value }
    );

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
                const data = await resetPasswordConfirm({uid, token, new_password, re_new_password}).unwrap();
                console.log(data);
                setRequestSent(true);
        }
        catch(e: any) {
            console.log(e)
        }
    };

    if (requestSent) {
        router.push('/');
    }
    return(
        <Layout>
           {isLoading ?
           <>Enviando email de confirmacion...</> 
           :
           (
           <Auth>
            <Form onSubmit={e => onSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                className='form-control'
                                type='password'
                                placeholder='New Password'
                                name='new_password'
                                value={new_password}
                                onChange={onChange}
                                minLength={6}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                className='form-control'
                                type='password'
                                placeholder='Confirm New Password'
                                name='re_new_password'
                                value={re_new_password}
                                onChange={onChange}
                                minLength={6}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Reset Password</Button>
                </Form>
            </Auth>
            )}
        </Layout>
    )
}

export default ResetPasswordConfirmScreen;