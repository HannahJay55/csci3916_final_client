import React, {useState} from 'react';
import './comments.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Close} from "@mui/icons-material";
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {submitLogin, submitRegister} from "../actions/authActions";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

const Login = ({loginEnabled, enableLogin}) => {

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [registerToggle, setRegisterToggle] = useState(false);

    const login = () => {
        dispatch(submitLogin({username: username, password: password}));
    }

    const register = () => {
        dispatch(submitRegister({username: username, password: password}));
    }

    console.log("rerender login");

    return (
        <div className={(loginEnabled && !loggedIn) ? "comment enable" : "comment"}>

            <Card sx={{width: "100%", overflowY: "scroll", overflowX: "hidden"}}>
                <Close fontSize="large" sx={{position:"absolute", right: "20px"}} onClick={e => {enableLogin(false); console.log("close comments", e)}}/>
                <Card sx={{marginTop: "30px"}}>
                    <CardContent>
                        <ToggleButtonGroup
                            color="primary"
                            value={registerToggle}
                            exclusive
                            onChange={(e, updated) => setRegisterToggle(updated)}
                            aria-label="Platform"
                            sx={{paddingBottom: "10px"}}
                        >
                            <ToggleButton value={false}>Sign in</ToggleButton>
                            <ToggleButton value={true}>Register</ToggleButton>
                        </ToggleButtonGroup>
                        <Form className='form-horizontal'>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={e => setUsername(e.target.value)} value={username} type="email" placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={e => setPassword(e.target.value)} value={password}  type="password" placeholder="Password" />
                            </Form.Group>
                            {registerToggle ?
                                <Button onClick={register}>Register</Button>
                                :
                                <Button onClick={login}>Sign in</Button>
                            }

                        </Form>
                    </CardContent>
                </Card>
            </Card>
        </div>
    )
}

export default Login;

