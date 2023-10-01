

const Post = () => {
    return (
        <div className="my-20 p-12 shadow-lg rounded-lg max-w-lg mx-auto">
            <form>
                <h1 className="text-2xl font-bold">Yeni Post Ekle</h1>
                <div className="py-2">
                    <h3 className="text-lg font-medium py-2">Açıklama</h3>
                    <textarea className="bg-gray-800 h-48 w-full text-white rounded-lg py-2 text-xl"></textarea>
                    <p className="text-cyan-500 font-medium text-sm">0/300</p>
                </div>
                <button className="w-full bg-orange-500 text-white font-bold p-2 my-2 rounded-aos text-2xl hover:bg-orange-700">Gönder</button>
            </form>
        </div>
    );
}

export default Post;