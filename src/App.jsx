import { Agreement02Icon, AiMagicIcon, ArrowRight01Icon, Blockchain04Icon, CheckmarkCircle02Icon, CommandIcon, EthereumRectangleIcon, EyeIcon } from 'hugeicons-react';
import { Ballroom, Gradient1, Gradient2, Gradient4, Lines, Spon1, Spon2, Spon3, Spon4 } from './assets';
import ModalBuild from './components/modalBuild.jsx';
import Navbar from './components/navbar.jsx';
import './index.css';
import { useState } from 'react';
import ThreeDModel from './components/model.jsx';

const App = () => {

  const [showModalBuild, setShowModalBuild] = useState(false)

  return (
      <main className='relative mt-16'>

        {/* Navbar Component */}
        <Navbar />
      
        {/* Hero Component */}
        <section className='relative w-full h-full overflow-hidden flex justify-center'>
          
          <div className="absolute w-full h-full overflow-hidden">
            
            {/* Square Line's */}
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

          {/* Gradient Effects - Background */}
          <img src={Gradient1} alt='gradient' className='gr3' />
          <img src={Gradient4} alt='gradient1' className='gr1' />
          <img src={Gradient2} alt='gradient2' className='gr2' />

          {/* Main Content - Hero */}
          <div className='relative w-full mt-0 h-max lg:h-[80vh] lg:text-center mx-auto flex flex-col justify-center lg:items-center'>
            <div className='lg:rounded-full flex bg-blue-100 lg:text-[16px] text-[13px] text-blue-400 h-max w-full lg:w-max lg:px-3 px-5 py-3 lg:py-1 mb-6 lg:mb-2 items-center lg:justify-center'>
              <AiMagicIcon className='mr-1' />
              Version 1.0.0 - new released 
              <AiMagicIcon className='ml-1' />
            </div>
            <h1 className='text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] lg:w-[80vw] lg:text-center'>
              From Planning to Celebration, <br/> We’ve Got You Covered
            </h1>
            <p className='text-slate-500 my-3 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]'>
              Bringing your special day to life with love and ease. LuvlyWed, the place for elegant wedding planning and unforgettable moments
            </p>
            <div className='relative text-center lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-blue-500 text-white rounded-md lg:rounded-full cursor-pointer'>
              Start Planning Now <Agreement02Icon className='ml-2 w-4 h-4 relative top-[4px]' />
            </div>

            <div className='text-[14px] mt-6 px-5 lg:px-0 w-max lg:w-max flex items-center mx-auto'>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-red-500 bg-red-100'>
                <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                Fotografi
              </div>
              <div className='w-full lg:w-max lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-green-500 bg-green-100'>
                <CommandIcon className='w-4 h-4 relative mr-2' />
                <p className='flex w-max'>
                  Venue wedding
                </p>
              </div>
              <div className='w-full lg:w-max lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-full text-purple-500 bg-purple-100'>
                <Blockchain04Icon className='w-4 h-4 relative mr-2' />
                <p className='flex w-max'>
                  Make-up
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className='relative flex items-center overflow-x-hidden px-16 w-full mt-[0px] h-max'>
          <div className='sponsor-container'>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
          </div>

          <div className='w-[10px] rounded-full bg-slate-400 h-[40px] mx-4'></div>
          
          <div className='sponsor-container'>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
            
            <div className='sponsor-items'>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[150px] relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
          </div>
        </section>

        <div className='absolute h-[100vh] w-screen overflow-hidden top-[0%]'>
          <img src={Lines} alt="lines-descoration" className='w-[100%] scale-[2] opacity-[0.3]' />
        </div>

        {/* Section 1 */}
        <section className='relative flex items-center overflow-x-auto px-16 w-full mt-[0px] h-max py-14'>
          <div className='relative w-1/2 h-[300px] pt-12 border border-slate-500'>
            <div className='absolute top-4 left-4 w-[30px] h-[30px] bg-blue-500 text-white rounded-md font-bold flex items-center justify-center'>
              <p>
                3D
              </p>
            </div>
            <ThreeDModel url={'../public/camera.glb'} intensity={30} speed={1} scaleCustom={[0.7, 0.7, 0.7]} />
          </div>
          <div className='w-1/2 px-8 h-max'>
            <div className='w-max h-max border border-slate-500 rounded-full px-3 py-1 flex items-center justify-center text-[14px] mb-3 text-black'>
              <p>
                Photo & Videography
              </p>
            </div>
            <h2 className='font-normal text-[32px]'>Photography & Videography Services for Your <span className='text-orange-500'>Event Needs</span></h2>
            <p className='text-[13px] my-6 leading-loose text-slate-500 w-[70%]'>
              Bringing Your Vision to Life with Exceptional Photography and Videography Services for Every Event
            </p>
          </div>
        </section>

        <section className='relative w-screen h-[100vh] mt-[40px]'>
          <h2 className='text-[50px] font-normal w-[65%] ml-16'>Timeless in the sophistication of our equipment</h2>
          <div>
            <div className='w-[1.5px] h-[120px] ml-20 my-4 bg-black'></div>
          </div>
          <div className='w-full h-[300px] flex justify-between items-center p-14 bg-[#FFD476] rounded-bl-[300px] text-[#030605]'>
           <div className='w-[80%] ml-auto flex items-center'>
              <div className='w-[80%]'>
                <h2 className='text-[32px] font-bold mb-4'>Servive Quality</h2>
                <p className='text-[12px] leading-loose w-[80%]'>
                We take pride in providing the best service for every couple. From photography to videography, we capture every special moment of your wedding with care and high quality. Many of our clients are delighted with the results and our friendly service, ensuring their big day is flawless and unforgettable. Your trust is our greatest reward.
                </p>
              </div>
              <div className='relative text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white rounded-md lg:rounded-lg cursor-pointer'>
                Explore <ArrowRight01Icon className='ml-2 w-4 h-4 relative top-[4px]' />
              </div>
           </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className='relative px-16 w-screen h-[100vh] mt-[40px]'>

          <div className='relative text-center w-ful h-max'>
            <div className='w-full relative z-[9999999]'>
              <h2 className='font-normal text-[32px]'>- The Ideal Place to Celebrate - <br /> Your True <span className='text-orange-500'>Love</span></h2>
              <p className='text-[13px] text-slate-500 mx-auto my-6 leading-loose w-[70%]'>
                Make your dream wedding come true at our elegant venue, with complete facilities.
              </p>
            </div>
          </div>

          <div className='relative w-full h-[400px] overflow-hidden rounded-[20px]'>

            {/* Images */}
            <div className='absolute top-6 left-6 z-[9999] h-full w-max'>
              <div className='bg-white rounded-[12px] mb-6 w-[50px] h-[50px]'></div>
              <div className='bg-white rounded-[12px] mb-6 w-[50px] h-[50px]'></div>
              <div className='bg-white rounded-[12px] mb-6 w-[50px] h-[50px]'></div>
            </div>

            <div className='w-max flex items-center absolute right-6 top-3'>
              <div onClick={() => setShowModalBuild(true)} className='mr-5 z-[9999] text-center active:scale-[0.98] hover:brightness-90 lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 p-3 font-medium text-[14px] lg:text-[15px] bg-white text-black rounded-md lg:rounded-full cursor-pointer'>
                <EyeIcon className='w-4 h-4 relative' />
              </div>

              <a className='z-[9999] text-center lg:w-max w-max flex active:scale-[0.98] hover:brightness-90 no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2 font-medium text-[14px] lg:text-[15px] bg-white text-black rounded-md lg:rounded-full cursor-pointer' href='https://wa.me/6289513093406' target='__blank'>
                <div className='w-max flex'>
                    Booking <Agreement02Icon className='ml-2 w-4 h-4 relative top-[4px]' />
                </div>
              </a>
            </div>

            {/* Benefit Hotels */}
            <div className='absolute bottom-3 right-6 w-max text-[12.5px] border border-slate-200 z-[999999] bg-white py-2 mb-4 px-4 shadow-md rounded-full flex items-start mt-3'>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] p-1 flex items-center justify-center bg-transparent rounded-full'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book A Hotel Service</p>
                </div>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] ml-4 p-1 flex items-center justify-center bg-transparent rounded-full'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book A Car Service</p>
                </div>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] ml-4 p-1 flex items-center justify-center bg-transparent rounded-full'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book Spa Service</p>
                </div>
              </div>
              <div className='relative z-[33] w-full h-full bg-black bg-opacity-65'></div>
              <img src={Ballroom} alt="ballroom background" className='absolute top-0 left-0 object-cover w-full h-full' />
          </div>

        </section>

        {/* Section 2 */}
        <section className='relative'>

        </section>


        {/* Modal */}
        {
          showModalBuild ? (
            <ModalBuild handleClose={() => setShowModalBuild(false)} />
          ):
            <></>
        }

      {/* Footer Component */}
        <footer className='w-full overflow-x-hidden h-[48px] text-slate-500 lg:text-[15px] text-[16px] flex items-center px-5 lg:justify-center'>
          <small>#Framework css from Indonesia 2024</small>
        </footer>
      </main>
  );
}

export default App;