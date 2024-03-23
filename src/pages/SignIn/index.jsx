import {FiMail, FiLock} from 'react-icons/fi';
import {Container, Form, LeftColumn, RigthColumn} from './styles';
import {Button} from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn(){
    return (
        <Container>
            <LeftColumn>
                <h1>Smart Tasks</h1>
                <p>Application to manage your useful tasks</p>
                <Form>
                <h2>Login</h2>
                <Input placeholder='E-mail' type='text' icon={FiMail}/>
                <Input placeholder='Password' type='password' icon={FiLock}/>
                <Button title='Enter'/>
                <a href="#">Register</a>
                </Form>   
            </LeftColumn>
            <RigthColumn></RigthColumn>
        </Container>
        
    )
}