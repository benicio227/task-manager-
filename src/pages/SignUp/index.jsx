import {FiMail, FiLock} from 'react-icons/fi';
import {Container, Form, LeftColumn, RigthColumn} from './styles';
import {Button} from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp(){
    return (
        <Container>
            <RigthColumn></RigthColumn>
            <LeftColumn>
                <h1>Smart Tasks</h1>
                <p>Application to manage your useful tasks</p>
                <Form>
                <h2>Create your account</h2>
                <Input placeholder='Name' type='text' icon={FiMail}/>
                <Input placeholder='E-mail' type='email' icon={FiLock}/>
                <Input placeholder='Password' type='password' icon={FiLock}/>
                <Button title='Register'/>
                <a href="#">Return to login</a>
                </Form>   
            </LeftColumn>
        </Container>
        
    )
}