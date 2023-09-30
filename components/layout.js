import Navbar from "./Navbar"
const Layout = ({ children }) => {
    return (
        <div className="mx-6 md:max-w-2xl md:mx-auto font-teko">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;