
const Appbar = () => {
    return (
        <div className="flex justify-between py-4 px-6">
            <div>
                <h1 className="text-2xl text-green-600 font-semibold">Logo</h1>
            </div>
            <div className="flex gap-3 items-center">
                <span className="cursor-pointer text-slate-600 text-xl underline">Home</span>
                <span className="cursor-pointer text-slate-600 text-xl underline">About</span>
                <span className="cursor-pointer text-slate-600 text-xl underline">Contact us</span>
                <span className="cursor-pointer text-slate-600 text-xl underline">Company</span>
            </div>
            <div className="flex gap-4 items-center">
                <button className="bg-white text-slate-600 rounded-sm border-none py-3 px-8 text-base shadow-md cursor-pointer">Login</button>
                <button className="bg-blue-600 text-white rounded-sm border-none py-3 px-8 text-base shadow-md cursor-pointer">Signup</button>
            </div>
        </div>
    )
}

export default Appbar
