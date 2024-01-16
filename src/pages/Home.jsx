import React from 'react'

const Home = () => {

const  stats =[

  {
    title:"SALES",
    icon:"",
    amount:"$16900"
  },
  {
    title:"PROFIT",
    icon:"",
    amount:"$-540"
  },
  {
    title:"PURCHASES",
    icon:"",
    amount:"$17440"
  }
]



  return (
   <>
   <div className='flex flex-row gap-5 justify-center'>
    {
      stats.map((item)=>(
        <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
        <span className="rounded-full bg-blue-100 p-3 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </span>
      
        <div>
          <p className="text-2xl font-medium text-gray-900">$240.94</p>
      
          <p className="text-sm text-gray-500">Total Sales</p>
        </div>
      </article>
      ))
    }
   </div>
   </>
  )
}

export default Home