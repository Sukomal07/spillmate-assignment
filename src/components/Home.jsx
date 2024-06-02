const Home = () => {
    return (
        <div className='flex p-24 gap-40 w-full justify-center items-center'>
            <div className='flex flex-col gap-4 w-96'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold text-slate-600'>Let your videos do the work</h1>
                    <p className='text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda maxime dignissimos explicabo.</p>
                </div>
                <div className=' flex gap-3'>
                    <button className='bg-red-500 text-white font-semibold rounded-sm border-none py-3 px-8 text-base shadow-md cursor-pointer"'>Try for free</button>
                    <button className='bg-white text-blue-600 font-semibold rounded-sm border-none py-3 px-8 text-base shadow-md cursor-pointer"'>watch videos</button>
                </div>
            </div>
            <div className='w-[30rem] h-80'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="image" className='w-full h-full rounded-md' />
            </div>
        </div>
    )
}

export default Home
