import React from 'react'



const Forgetpassword= () => {
  return (
    <>
<div className='Login-container'>
    <h1>Forgot your password?</h1>
    <p>Enter you email and we will send you a reset link</p>
    {/*<button className='blue-input'><BsFacebook className='facebook-img'/><span className='icon_btn--txt' style={{color: 'white'}}>Continue with Facebook</span></button>
    <button className='gg'><img src='./img/google.png' className='google-img'/><span className='icon_btn--txt'>Continue with Google</span></button>
    <button><img src='./img/apple.png' className='google-img'/><span className='icon_btn--txt'>Continue with Apple</span></button>
      <hr/>
      <span className='Space'>OR</span> */}
      <form>
        <input type='text' placeholder='Email address' />
        <button className='Continue-btn'>Send reset link</button>
        <p>I can't recover my account using this page ....</p>
       {/*<p className='paragraph'>By joining I agree to receive emails from Fiver.</p>
        <hr style={{marginBottom: '20px', marginTop: '20px', backgroundColor: 'silver'}}/>
        <span className='Sign-in-txt'>Already a member?<a className='Sign-Lnk'>Sign In</a></span> */}


       
      </form>
    </div>
    </>
  )
}

export default Forgetpassword
