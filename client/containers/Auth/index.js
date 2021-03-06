import React, { Component } from "react";
import loadable from "@loadable/component";
import RenderRoutes from "../../components/RenderRoutes";

const Login = loadable(() => import(/* webpackChunkName: "login", webpackPrefetch: true */ "./Login"), {
    ssr: true
    // fallback: <Loading />
});
const SignUp = loadable(() => import(/* webpackChunkName: "signup", webpackPrefetch: true */ "./SignUp"), {
    ssr: true
    // fallback: <Loading />
});

class Auth extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="page-wrapper">
                <div className="row">
                    <div className="column page-side-wrapper">
                        <img src="/assets/help.png" alt="HELP.png"/>
                        <h1>Plan</h1>
                        <h2>Collaborate</h2>
                        <h3>Succeed</h3>
                    </div>
                    <div className="column">
                        <div className="login-form-wrapper">
                            <img src="/assets/logo.png" className="logo-img"/>
                            <RenderRoutes routes={[{
                                path: "/login",
                                component: Login
                            }, {
                                path: "/signup",
                                component: SignUp
                            }]} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
