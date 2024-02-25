'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const [signupData, setSignupData] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data, e) => {
        setSignupData(data);
    }

    return ( 
        <div className="axil-signin-form container">
            <h3 className="title">Soy nuevo aqui</h3>
            <p className="b2 mb--55">Ingrese sus datos</p>
            <form className="singin-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input type="text" className="form-control" {...register('userName', { required: true })} placeholder="usuario"/>
                    {errors.userName && <p className="error text-danger">Nombre de usuario es obligatorio.</p>}
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" className="form-control" {...register('email', { required: true, pattern: /^\S+@\S+$/i})} placeholder="usuario@example.com" />
                    {errors.email && <p className="error text-danger">Email es obligatorio.</p>}
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" {...register('password', { required: true, minLength: 8})} placeholder="********"/>
                    {errors.password && <p className="error text-danger">Contraseña es obligatorio.</p>}
                </div>
                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className="axil-btn btn-bg-primary submit-btn">Registrarse</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;