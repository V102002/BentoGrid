import React from 'react'
const App = () => {
  return (
    <div className='bg-gray-200 container flex flex-col justify-center 
                lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-hidden lg:h-screen lg:min-w-screen'>
        <div className='bg-purple-500 flex flex-col mx-4 mt-8 text-center rounded-md lg:col-start-2 lg:col-span-2 lg:row-start-1'>
          <h1 className='pt-5 text-white text-4xl font-medium lg:mt-3 lg:text-5xl'>Social Media <span className='text-yellow-400'>10x</span> Faster with AI</h1>
          <img className='scale-40' src="./public/images/illustration-five-stars.webp" alt="" />
          <p className='text-gray-200 -translate-y-1/2 mb-5'>Over 4,000 5-star reviews</p>
        </div>

        <div className='mx-4 my-8 bg-gray-50 p-5 rounded-md lg:row-start-2 lg:col-start-2'>
          <img className='rounded-full' src="./public/images/illustration-multiple-platforms.webp" alt="" />
          <h1 className='text-left text-[25px] font-bold'>Manage multiple accounts and platforms.</h1>
        </div>

        <div className='schedule bg-yellow-500 mx-4 px-5 pt-3 w-fit rounded-md lg:row-start-2 lg:col-start-3'>
          <h1 className='text-left mb-4 leading-snug text-[25px] font-bold'>Maintain a consistent posting schedule.</h1>
          <img className='w-[200px] h-[150px] object-contain' src="./public/images/illustration-consistent-schedule.webp" alt="" />
        </div>

        <div className='social bg-purple-100 mx-4 my-5 px-4 pt-3 rounded-md lg:row-start-1 lg:col-start-4 lg:row-span-2'>
          <h1 className='text-left mb-4 leading-snug text-[25px] font-bold'>Schedule to social media</h1>
          <img className='my-3' src="./public/images/illustration-schedule-posts.webp" alt="" />
          <p className='text-[17px] text-center font-medium mb-5'>Optimize post-timings to publish content at the perfect time for your audience</p>
        </div>

        <div className='followers bg-purple-500 mx-4 my-5 px-4 pt-3 pb-5 rounded-md 
          lg:row-start-3 lg:col-start-3 lg:col-span-2 lg:flex lg:items-center lg:gap-4'>

          <img className='w-[290px] h-auto object-contain' src="./public/images/illustration-grow-followers.webp" alt="" />

          <div className='flex flex-col justify-center text-center'>
            <h1 className='text-white font-semibold text-3xl lg:text-5xl lg:text-left'>Grow followers with non-stop content.</h1>
          </div>
        </div>

        <div className='bg-white mx-4 mt-8 text-center rounded-md px-5 lg:row-start-3 lg:col-start-2 lg:self-start'>
          <h1 className='pt-5 text-black text-4xl text-left font-semibold lg:font-bold'>{'>'}56%</h1>
          <p className='text-left lg:text-2xl'>faster audience growth</p>
          <img className='w-[150px] my-4 lg:w-[300px]' src="./public/images/illustration-audience-growth.webp" alt="" />
        </div>

        <div className='mx-4 my-8 bg-amber-100 p-5 rounded-md lg:row-start-1 lg:row-span-2 lg:col-start-1'>
          <h1 className='text-left text-[25px] font-bold lg:text-6xl'>Create and schedule content <span className='text-purple-500 italic'>quicker.</span></h1>
          <img className='w-[150px] mt-4 lg:w-[250px]' src="./public/images/illustration-create-post.webp" alt="" />
        </div>

        <div className='mx-4 mt-1 mb-5 bg-yellow-500 p-5 rounded-md lg:row-start-3 lg:col-start-1'>
          <h1 className='text-left text-[25px] font-bold lg:text-[35px]'>Write your content using AI.</h1>
          <img className='w-[200px] mt-3' src="./public/images/illustration-ai-content.webp" alt="" />
        </div>
    </div>
  )
}

export default App
