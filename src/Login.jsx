import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { signInUser, signInWIthGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("Logging in...");
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result);
                event.target.reset();
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleLoginWIthGoogle = () => {
        signInWIthGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="max-w-xl mx-auto my-8">
            <h3 className="text-3xl text-center mb-5">Login Now</h3>
            <form onSubmit={handleLogin} action="" className="">
                <label className="input input-bordered flex items-center gap-2 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name="email" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" name="password" className="grow" placeholder="Password" />
                </label>

                <button className="btn btn-accent w-2/5">Login</button>

                <div onClick={handleLoginWIthGoogle} className="mt-6"><button className="btn btn-error text-white w-2/5">Login With Google</button></div>
            </form>

            <p className="mt-4 text-xl">New to this website? Please <Link className="text-red-600" to={"/register"}>Register</Link>.</p>
        </div>
    );
};

export default Login;