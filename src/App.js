import './App.css';
import React, {useEffect} from 'react';
import GoogleLogin from 'react-google-login';

function App() {

  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
  }

  return (
    <div className="App">
        <h1>Informes AWS</h1>
        <GoogleLogin
          clientId="611305959850-muu6g15om1l83ovqv0c96m5cfiv85mjd.apps.googleusercontent.com"
          buttonText="Iniciar sesion"
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={'single_host_origin'}
        />
    </div>
    
  );
}

export default App;
