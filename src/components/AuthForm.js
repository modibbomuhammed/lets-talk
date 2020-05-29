import React, { useState } from 'react'

const AuthForm = ({ heading, buttonText, signUp, onAuth, errors, history, removeError }) => {
    const [ details, setDetails ] = useState({
        email: '',
        username: '',
        password: '',
        profileImageUrl: ''
    });
    const { email, username, password, profileImageUrl } = details;

    function handleChange(e){
        setDetails({ ...details, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        const authType = signUp ? 'signup' : 'signin';
        onAuth(authType, details)
            .then(() => {
                history.push('/');                
            })
            .catch(() => {
                return
            });
    }
    
    history.listen(() => {
        removeError();
    });
    return (
        <div>
            <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2>{heading}</h2>
                            {errors.message && <div className='alert alert-danger'>{errors.message}</div>}
                        <label htmlFor="email">Email:</label>
                        <input type="text" className='form-control' id='email' name='email' onChange={handleChange} value={email} />
                        
                        <label htmlFor="password">Password:</label>
                        <input type="password" className='form-control' id='password' name='password' onChange={handleChange} value={password} />

                        {signUp && (
                            <>
                            <label htmlFor="username">Username:</label>
                            <input type="text" className='form-control' id='username' name='username' onChange={handleChange} value={username} />

                            <label htmlFor="image-url">Image-url:</label>
                            <input type="text" className='form-control' id='image-url' name='profileImageUrl' onChange={handleChange} value={profileImageUrl} />
                            </>
                        )}
                        <button type='submit' className='btn btn-primary btn-block btn-lg'>
                            {buttonText}    
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;