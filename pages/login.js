import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter()
    const { user, login } = useAuth()
    console.log(user)

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await login(data.email, data.password)
            router.push('/dashboard')
        } catch (err) {
            console.log(err)
        }

        console.log(data)
    }

    const loginGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
        router.push('/dashboard')
    };

    const loginFacebook = async () => {
        await signInWithPopup(auth, facebookProvider);
        router.push('/dashboard')
    };

    return (
        <div
            style={{
                width: '40%',
                margin: 'auto',
            }}
        >
            <h1 className="text-center my-3 ">Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) =>
                            setData({
                                ...data,
                                email: e.target.value,
                            })
                        }
                        value={data.email}
                        required
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) =>
                            setData({
                                ...data,
                                password: e.target.value,
                            })
                        }
                        value={data.password}
                        required
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
            <Button onClick={loginGoogle}>LOGIN GOOGLE</Button>
            <Button onClick={loginFacebook}>LOGIN FACEBOOK</Button>
        </div>
    )

}

export default Login