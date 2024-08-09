import { GoogleLogin } from '@react-oauth/google';


const GoogleAuth = () => {
  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
  <>
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
    <h1>Google</h1>
  </>
  );
}

export default GoogleAuth;