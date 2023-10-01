import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {

    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    const getData = async () => {
        if (loading) return;
        if (!user) return router.push("/auth/login")
    }
    useEffect(() => {
        getData();
    }, [user, loading])

    return (
        <div>
            <h2>Postlarınız</h2>
            <div>
                Postlar
            </div>
            <button onClick={() => auth.signOut()}>Çıkış</button>
        </div>
    );
}

export default Dashboard;