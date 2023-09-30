import { FcGoogle } from "react-icons/fc"
const Login = () => {
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium">Giriş Yapınız</h2>
            <div className="py-4">
                <button className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2">
                    <FcGoogle className="text-2xl" /> Google ile Giriş Yap
                </button>
            </div>
        </div>
    );
}

export default Login;