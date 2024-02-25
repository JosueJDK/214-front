'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { logIn } from "@/store/slices/authSlice";
import authService from "../services/auth.service";

export const SignInComponent = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const [loginError, setLoginError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        try{
            if (data.email &&  data.password) {
                const authUser = await authService.login(data);
                dispatch(logIn(authUser));
                router.push('/');
            }else {
                setLoginError(true);
            }
        }catch (e) {
            console.log(e.message)
            return
        }
    }
    return ( 
        <div className="axil-signin-form container">
            <h3 className="title">Inicie Sesión</h3>
            <p className="b2 mb--55">Ingrese su credenciales</p>
            <form className="singin-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} placeholder="usuario@example.com" />
                    {errors.email && <p className="error text-danger">Email es obligatorio.</p>}
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" {...register('password', { required: true, minLength: 4})} placeholder="********" />
                    {errors.password && <p className="error text-danger">Contraseña es obligatorio.</p>}
                </div>
                {loginError && <p className="error text-danger">El usuario o contraseña no son correctos!</p>}

                <div className="form-group d-flex align-items-center justify-content-between">
                    <button type="submit" className="axil-btn btn-bg-primary submit-btn my-2">Iniciar Sesión</button>
                    <Link href="/forgot-password" className="forgot-btn my-2">¿Olvidaste tu contraseña?</Link>
                </div>
            </form>
        </div>
     );
}
 
export default SignInComponent;