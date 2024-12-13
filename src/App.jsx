import { AiMagicIcon, Blockchain04Icon, CommandIcon, EthereumRectangleIcon, LaptopProgrammingIcon } from 'hugeicons-react';
import { Gradient1, Gradient2, Gradient4 } from './assets';
import './index.css';

const App = () => {

  return (
      <div className='relative'>
      
        <div id='asteroid1b' className='lg:inline hidden'></div>
        <div id='asteroid2b' className='lg:inline hidden'></div>
        <div id='asteroid1b2' className='lg:inline hidden'></div>
        <div id='asteroid3b' className='lg:inline hidden'></div>
        <div id='asteroid4b' className='lg:inline hidden'></div>
        <div id='asteroid5b' className='lg:inline hidden'></div>

        <div className='relative overflow-x-hidden w-full h-full flex justify-center'>
          <div className="absolute w-full h-full overflow-hidden">
            <div className="w-screen h-[1px] absolute left-0 top-[10%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[20%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[30%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[40%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[50%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[60%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[70%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[80%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[90%] bg-slate-100"></div>
            <div className="w-screen h-[1px] absolute left-0 top-[100%] bg-slate-100"></div>
          
            <div className="w-[1px] h-screen absolute top-0 left-[10%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[20%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[30%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[40%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[50%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[60%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[70%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[80%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[90%] bg-slate-100"></div>
            <div className="w-[1px] h-screen absolute top-0 left-[100%] bg-slate-100"></div>
          </div>
          <img src={Gradient1} alt='gradient' className='gr3' />

          <img src={Gradient4} alt='gradient1' className='gr1' />
          <img src={Gradient2} alt='gradient2' className='gr2' />

          <div className='relative w-full mt-0 h-max lg:h-[80vh] lg:text-center mx-auto flex flex-col justify-center lg:items-center'>
            <div className='lg:rounded-full flex bg-blue-100 lg:text-[16px] text-[13px] text-blue-400 h-max w-full lg:w-max lg:px-3 px-5 py-3 lg:py-1 mb-6 lg:mb-2 items-center lg:justify-center'>
              <AiMagicIcon className='mr-1' />
              Version 1.0.0 - new released 
              <AiMagicIcon className='ml-1' />
            </div>
            <h1 className='text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] lg:w-[80vw] lg:text-center'>
              Build modern website easily <br /> no CSS required.
            </h1>
            <p className='text-slate-500 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]'>A utility-first CSS framework packed with classes like v-pt-4, <span className='bg-transparent lg:bg-blue-400 lg:text-white rounded-full h-max pb-[2px] text-[14px] lg:px-2'>v-d-flex</span>, text-center and rotate-90 that can be composed to build any design, directly in your code.</p>
            <div className='relative text-center lg:w-max w-[60vw] no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-14 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-blue-500 text-white rounded-md lg:rounded-full cursor-pointer'>
              Get started <LaptopProgrammingIcon className='ml-1 w-4 h-4 relative top-[1.5px]' />
            </div>

            <div className='text-[14px] mt-6 px-5 lg:px-0 w-[100vw] lg:w-max flex items-center mx-auto'>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-red-500 bg-red-100'>
                <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                Utilities
              </div>
              <div className='w-full lg:w-[30%] lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-purple-500 bg-purple-100'>
                <Blockchain04Icon className='w-4 h-4 relative mr-2' />
                Components
              </div>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-green-500 bg-green-100'>
                <CommandIcon className='w-4 h-4 relative mr-2' />
                Features
              </div>
            </div>
          </div>
        </div>

        <footer className='w-full overflow-x-hidden h-[48px] text-slate-500 lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center'>
          <small>#Framework css from Indonesia 2024</small>
        </footer>
      </div>
  );
}

export default App;