
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
        <div className="absolute left-[50%] top-[30%] -translate-x-[50%] -translate-y-[50%] text-[40px]">
            Welcome To HandMan Game 
        </div>
        <button 
        onClick={()=> { navigate("/start")}}
        type="button" 
        className="py-2.5 px-8 me-2 mb-2 text-xl font-medium absolute left-[50%] top-[40%] -translate-x-[50%] -translate-y-[50%] text-[30px] text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >Enter</button>
    </>
  )
}

export default Home;