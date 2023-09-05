import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, signInWithGoogle} from '../../firebase';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit'


import './signIn.css'

export const SignIn = () => {


  const [justifyActive, setJustifyActive] = useState('tab1');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
      }).catch((error) => {
        console.log(error);
      })
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((useCredential) => {
      console.log(useCredential)
    }).catch((error) => {
      console.log(error);
    })
  }


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };



  return (
    <div className='container'>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

          <MDBTabsPane show={justifyActive === 'tab1'}>

            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div className='google'>

                <MDBBtn tag='a' color='none' className='gButton' style={{ color: '#1266f1' }} onClick={signInWithGoogle}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type='submit' onClick={signIn}>Sign in</MDBBtn>

          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>

            <div className="text-center mb-3">

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>            
              </div>

              <p className="text-center mt-3"></p>
            </div>

            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <MDBBtn className="mb-4 w-100" type='submit' onClick={signUp}>Sign up</MDBBtn>

          </MDBTabsPane>

        </MDBTabsContent>

      </MDBContainer>
    </div>
  )
}
