import { FcGoogle } from "react-icons/fc"
import { auth } from "../../utils/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/router"
const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const router = useRouter();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result);
            if (result) {
                router.push("/")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium">Giriş Yapınız</h2>
            <div className="py-4">
                <button className="text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2" onClick={GoogleLogin}>
                    <FcGoogle className="text-2xl" /> Google ile Giriş Yap
                </button>
            </div>
        </div>
    );
}

export default Login;