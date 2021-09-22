import React, { Component,useState } from 'react';
import Modal from 'react-responsive-modal';

 
class Header extends Component
{
    
    constructor(props)
    {
        super(props)
        this.state={sign:false,login:false,}
    }
    onOpenModal=()=>{this.setState({sign:true});};
    onOpenModalLogin=()=>{this.setState({login:true});};
    onCloseModal=()=>{this.setState({sign:false});};
    onCloseModalLogin=()=>{this.setState({login:false});};
    
   

render() {
    const Header=(props)=>{
       
    }
    let{login}=this.state;
    let{sign}=this.state;

    
    return (
        <>
        <div>
            <nav class="navbar sticky-top navbar-expand-lg custom-navbar">
                <div class="container-fluid cust-navbar-div">
                    <a class="navbar-brand" href="#">
                        <img src="./images/logo.png" alt="" width="250" height="70" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav w-50">
                            <a class="nav-link custom-nav-links" href="/">Home</a>
                            <a class="nav-link custom-nav-links" href="/courses">Course</a>
                            <a class="nav-link custom-nav-links" href="#">Pricing</a>
                            <button type="button" class="btn btn-outline-secondary"id="login" onClick={this.onOpenModalLogin}>Login</button>
                            <button type="button" class="btn btn-warning"id="signUp" onClick={this.onOpenModal}>Signup</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <Modal open={login} onClose={this.onCloseModalLogin}>
                    <div className="modal-body"style={
                        {
                            position:'absolute',
                            top:'50%',
                            left:'50%',
                            transform:'translate(-50%,-50%)',
                            width:'380px',
                            padding:'20px 30px',
                            background:'#fff',
                            boxShadow:'2px 2px 5px 5px rgba(0,0,0,0.15)',
                            borderRadius:'10px'
                        }
                    }>
                        <h2 style={{
                            textAlign:'center',
                            color:'#222',
                            margin:'10px 0px 20px',
                            fontSize:'30px',
                            
                        }}>Login</h2>
                        
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            
                            <div className="form-group"style={{margin:'15px 0px'}}>
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true"
                                 />
                            </div>
                            <div className="form-group"style={{margin:'15px 0px'}}>
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true"
                                 />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Login" style={{
                                width:'100%',
                                height:'40px',
                                border:'none',
                                outline:'none',
                                fontSize:'16px',
                                borderRadius:'10px',
                                
                            }} />
                        </form>
                        <p>Sign in with social platforms</p>
                       
                    </div>
                </Modal>
              
                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body"style={
                        {
                            position:'absolute',
                            top:'50%',
                            left:'50%',
                            transform:'translate(-50%,-50%)',
                            width:'380px',
                            padding:'20px 30px',
                            background:'#fff',
                            boxShadow:'2px 2px 5px 5px rgba(0,0,0,0.15)',
                            borderRadius:'10px'
                        }
                    }>
                        <h2 style={{
                            textAlign:'center',
                            color:'#222',
                            margin:'10px 0px 20px',
                            fontSize:'30px',
                            
                        }}>SignUp</h2>
                        
                        <form className="contact-form form-validate3" novalidate="novalidate">
                            <div className="form-group"style={{margin:'15px 0px'}}>
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autocomplete="off" aria-required="true"
                                 />
                            </div>
                            <div className="form-group"style={{margin:'15px 0px'}}>
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true"
                                 />
                            </div>
                            <div className="form-group"style={{margin:'15px 0px'}}>
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true"
                                 />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" style={{
                                width:'100%',
                                height:'40px',
                                border:'none',
                                outline:'none',
                                fontSize:'16px',
                                borderRadius:'10px',
                                
                            }} />
                        </form>
                    </div>
                </Modal>
        </>
    )
}
}

export default Header;