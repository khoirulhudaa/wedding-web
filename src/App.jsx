import { Agreement02Icon, AiMagicIcon, ArrowRight01Icon, LinkSquare02Icon, Blockchain04Icon, CheckmarkCircle02Icon, CommandIcon, EthereumRectangleIcon, EyeIcon, SparklesIcon } from 'hugeicons-react';
import { useState } from 'react';
import { Ballroom, Gradient1, Gradient2, Gradient4, HP, Lines, Spon1, Spon2, Spon3, User1, User2, User3 } from './assets';
import ModalBuild from './components/modalBuild.jsx';
import ThreeDModel from './components/model.jsx';
import Navbar from './components/navbar.jsx';
import './index.css';

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
          <div className='relative w-full mt-0 h-max lg:h-[80vh] mb-4 lg:text-center mx-auto flex flex-col justify-center lg:items-center'>
            <div className='absolute top-0 lg:rounded-[10px] flex border-y border-y-slate-400 lg:text-[16px] text-[13px] text-black h-max w-full lg:w-screen lg:px-3 px-5 py-3 lg:py-2 mb-6 lg:mb-2 items-center lg:justify-center'>
              <AiMagicIcon className='mr-1' />
              Version 1.0.0 - new released 
              <AiMagicIcon className='ml-1' />
            </div>
            <h1 className='text-[2.6rem] lg:ml-0 ml-5 lg:text-[3.7rem] font-bold w-[90vw] mt-10 lg:w-[80vw] lg:text-center'>
              From Planning to Celebration, <br/> We’ve Got You Covered
            </h1>
            <p className='text-slate-500 my-3 lg:ml-0 ml-5 lg:text-[16px] text-[14px] w-[90%] lg:w-[50%]'>
              Bringing your special day to life with love and ease. LuvlyWed, the place for elegant wedding planning and unforgettable moments
            </p>
            <div className='relative text-center lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-[#FFD476] text-white rounded-md lg:rounded-[10px] cursor-pointer'>
              Start Planning Now <Agreement02Icon className='ml-2 w-4 h-4 relative top-[4px]' />
            </div>

            <div className='text-[14px] mt-6 px-5 lg:px-0 w-max lg:w-max flex items-center mx-auto'>
              <div className='w-full lg:w-[30%] lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-[10px] text-red-500 bg-red-100'>
                <EthereumRectangleIcon className='w-4 h-4 relative mr-2' />
                Fotografi
              </div>
              <div className='w-full lg:w-max lg:justify-center lg:mx-4 flex items-center px-3 py-3 lg:py-1.5 lg:rounded-[10px] text-green-500 bg-green-100'>
                <CommandIcon className='w-4 h-4 relative mr-2' />
                <p className='flex w-max'>
                  Venue wedding
                </p>
              </div>
              <div className='w-full lg:w-max lg:justify-center flex items-center px-3 py-3 lg:py-1.5 lg:rounded-[10px] text-purple-500 bg-purple-100'>
                <Blockchain04Icon className='w-4 h-4 relative mr-2' />
                <p className='flex w-max'>
                  Make-up
                </p>
              </div>
            </div>
          </div>

        </section>

        <section className='relative flex items-center overflow-x-hidden px-16 w-full mb-[70px] h-max'>
          <div className='sponsor-container'>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
          </div>

          <div className='relative w-[50px] rounded-[10px] border-[1px] flex pb-2 items-end justify-center border-slate-400 bg-slate-200 h-[40px] mx-4'>
            <div className='relative w-[6px] h-[12px] rounded-full bg-red-800'></div>
          </div>
          
          <div className='sponsor-container'>
            <div className='sponsor-items'>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
            
            <div className='sponsor-items'>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon1} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon2} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
              <div className='w-[150px] h-[50px] border border-slate-500 relative mx-4'>
                <img src={Spon3} alt="sponsor" className='grayscale-[100%] object-contain w-full h-full' />
              </div>
            </div>
          </div>
        </section>

        <div className='absolute h-[100vh] w-screen overflow-hidden top-[0%]'>
          <img src={Lines} alt="lines-descoration" className='w-[100%] scale-[2] opacity-[0.3]' />
        </div>

        {/* Dress wedding */}
        <section className='relative flex items-center overflow-x-auto px-16 w-full border-t border-t-slate-500 h-max pb-14'>
          <div className='relative w-1/3 h-[90vh] pt-12 border-x border-x-slate-500'>
            <div className='absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white rounded-md font-bold flex items-center justify-center'>
              <p>
                3D
              </p>
            </div>
            <ThreeDModel url={'../public/dress3.glb'} intensity={30} speed={1} scaleCustom={[2, 2, 2]} />
            <div className='relative top-[-100px] w-screen h-[1px] bg-slate-500'></div>
          </div>
          <div className='w-1/2 px-8 h-max'>
            <div className='w-max h-max border border-slate-500 rounded-[5px] px-3 py-1 flex items-center justify-center text-[14px] mb-3 text-black'>
              <p>
                Make-up Artist - Best of 2025
              </p>
            </div>
            <h2 className='font-normal text-[32px]'>Flawless Make-Up and Wedding Dresses for Your <span className='text-orange-500'>Special Day</span></h2>
            <p className='text-[13px] my-6 leading-loose text-slate-500 w-[92%]'>
            Create unforgettable memories with our exquisite collection of professional make-up and stunning wedding dresses, tailored to make your special day even more magical
            </p>

            <div className='absolute top-6 right-14 text-[12px] px-4 py-2 border border-slate-500 flex items-center justify-center rounded-md hover:bg-glow hover:animate-glow'>
              <p>100 Outfits, Shirts, Accessories & Professional Make-Up</p>
              <SparklesIcon className='w-5 h-5 ml-3' />
            </div>

            <div className='absolute bottom-[32%] right-14 border border-black flex items-center justify-center w-[60px] h-[60px] cursor-pointer active:scale-[0.98] rounded-full'>
              <LinkSquare02Icon className='' />
            </div>
          </div>
        </section>

        <section className='relative w-screen h-[100vh] mt-[0px]'>
          <div className='w-[70%]'>
            <h2 className='text-[50px] font-normal w-[80%] ml-16'>The Modern Way to Share Wedding Day</h2>
            <div>
              <div className='w-max h-[160px] ml-16 flex items-center my-4 border-l border-l-black'>
                <div className='relative w-max h-max ml-4 border border-slate-500 rounded-[10px] px-3 py-1 flex items-center justify-center text-[14px] mb-5   text-black'>
                  <p>
                    Free domain
                  </p>
                </div>
                <div className='relative w-max h-max ml-4 border border-slate-500 rounded-[10px] px-3 py-1 flex items-center justify-center text-[14px] mb-5   text-black'>
                  <p>
                    Free domain
                  </p>
                </div>
                <div className='relative w-max h-max ml-4 border border-slate-500 rounded-[10px] px-3 py-1 flex items-center justify-center text-[14px] mb-5   text-black'>
                  <p>
                    Free domain
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-[70%] ml-auto h-[200px] px-14 pt-10 bg-[#FFD476] rounded-bl-[300px] text-[#030605]'>
              <div className='w-[80%]'>
                <p className='text-[12px] leading-loose w-[70%] ml-12 mb-4'>
                  Spread your wedding invitations quickly and digitally, invite them and share this happy news now
                </p>
              </div>
              <div className='relative text-center lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3 lg:py-2.5 ml-20 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white rounded-md lg:rounded-lg cursor-pointer'>
                Order now <ArrowRight01Icon className='ml-2 w-4 h-4 relative top-[4px]' />
              </div>
            <img src={HP} alt="handphone" className='absolute top-[-177%] right-16 w-[32%] h-auto' />
          </div>
        </section>

        {/* Section 1 */}
        <section className='relative flex items-center overflow-x-auto px-16 w-full mt-[0px] h-max py-14'>
          <div className='relative w-1/2 h-[300px] pt-12 border border-slate-500'>
            <div className='absolute top-4 left-4 w-[30px] h-[30px] bg-[#FFD476] text-white rounded-md font-bold flex items-center justify-center'>
              <p>
                3D
              </p>
            </div>
            <ThreeDModel url={'../public/camera.glb'} intensity={30} speed={1} scaleCustom={[0.7, 0.7, 0.7]} />
          </div>
          <div className='w-1/2 px-8 h-max'>
            <div className='w-max h-max border border-slate-500 rounded-[10px] px-3 py-1 flex items-center justify-center text-[14px] mb-3 text-black'>
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
            <div className='w-[1px] h-[120px] ml-20 my-4 bg-black'></div>
          </div>
          <div className='w-full h-[300px] flex justify-between items-center px-14 pb-14 pt-10 bg-[#FFD476] rounded-bl-[300px] text-[#030605]'>
           <div className='w-[80%] ml-auto flex items-center'>
              <div className='w-[80%]'>
                <h2 className='text-[32px] font-bold mb-4'>Servive Quality</h2>
                <p className='text-[12px] leading-loose w-[80%]'>
                We take pride in providing the best service for every couple. From photography to videography, we capture every special moment of your wedding with care and high quality. Many of our clients are delighted with the results and our friendly service, ensuring their big day is flawless and unforgettable. Your trust is our greatest reward.
                </p>
              </div>
              <div className='relative text-center active:scale-[0.98] hover:brightness-[90%] lg:w-max w-max flex no-underline px-4 h-max lg:px-6 py-3 lg:py-2.5 font-medium text-[14px] lg:text-[15px] bg-[#28887A] text-white rounded-md lg:rounded-lg cursor-pointer'>
                Explore <ArrowRight01Icon className='ml-2 w-4 h-4 relative top-[4px]' />
              </div>
           </div>
          </div>
        </section>

        <section className='relative w-screen px-16 h-[40vh] mt-[20px] flex items-center'>
          <div className='w-max flex items-center'>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User1} alt="customer-photo" className='object-contain' />
            </div>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User2} alt="customer-photo" className='object-contain' />
            </div>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User3} alt="customer-photo" className='object-contain' />
            </div>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User1} alt="customer-photo" className='object-contain' />
            </div>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User2} alt="customer-photo" className='object-contain' />
            </div>
            <div className='w-[70px] h-[70px] ml-4 overflow-hidden rounded-[10px]'>
              <img src={User3} alt="customer-photo" className='object-contain' />
            </div>
          </div>
          <div className='flex items-center ml-auto w-max'>
            <div className='w-max h-max'>
              <h2 className='font-bold text-[46px] mb-3'>1.304</h2>
              <p>satisfied male <br /> customer</p>
            </div>
            <div className='w-[1px] h-[100px] bg-slate-400 mx-20'>

            </div>
            <div className='w-max h-max'>
              <h2 className='font-bold text-[46px] mb-3'>1.304</h2>
              <p>satisfied female <br /> customer</p>
            </div>
          </div>
        </section>

        <div className='mt-16 w-screen h-[1px] bg-slate-300'></div>

        {/* Section 2 */}
        <section className='relative px-16 w-screen h-[100vh] mt-[70px]'>

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
              <div onClick={() => setShowModalBuild(true)} className='mr-5 z-[9999] text-center active:scale-[0.98] hover:brightness-90 lg:w-max w-max flex no-underline lg:ml-0 ml-5 mt-4 p-3 font-medium text-[14px] lg:text-[15px] bg-white text-black rounded-md lg:rounded-[10px] cursor-pointer'>
                <EyeIcon className='w-4 h-4 relative' />
              </div>

              <a className='z-[9999] text-center lg:w-max w-max flex active:scale-[0.98] hover:brightness-90 no-underline lg:ml-0 ml-5 mt-4 px-4 lg:px-6 py-3 lg:py-2 font-medium text-[14px] lg:text-[15px] bg-white text-black rounded-md lg:rounded-[10px] cursor-pointer' href='https://wa.me/6289513093406' target='__blank'>
                <div className='w-max flex'>
                    Booking <Agreement02Icon className='ml-2 w-4 h-4 relative top-[4px]' />
                </div>
              </a>
            </div>

            {/* Benefit Hotels */}
            <div className='absolute bottom-3 right-6 w-max text-[12.5px] border border-slate-200 z-[999999] bg-white py-2 mb-4 px-4 shadow-md rounded-[10px] flex items-start mt-3'>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] p-1 flex items-center justify-center bg-transparent rounded-[10px]'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book A Hotel Service</p>
                </div>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] ml-4 p-1 flex items-center justify-center bg-transparent rounded-[10px]'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book A Car Service</p>
                </div>
                <div className='flex items-center border-b border-white'>
                  <div className='w-[24px] h-[24px] ml-4 p-1 flex items-center justify-center bg-transparent rounded-[10px]'>
                    <CheckmarkCircle02Icon className='text-blue-700 w-8 h-8' />
                  </div>
                  <p>Book Spa Service</p>
                </div>
              </div>
              <div className='relative z-[33] w-full h-full bg-black bg-opacity-65'></div>
              <img src={Ballroom} alt="ballroom background" className='absolute top-0 left-0 object-cover w-full h-full' />
          </div>

        </section>

        <div className='relative ml-16 w-[1px] h-[100px] bg-slate-500'>

        </div>

        {/* Section 2 */}
        <section className='relative my-10 px-16 min-h-[70vh] pb-10 overflow-hidden'>
          <h1 className='text-[50px] w-[72%] text-black'>Serving Delicious Meals, Making Every Moment</h1>
          <div className='relative overflow-hidden px-16 mt-12 ml-auto w-full flex items-center justify-between border-y border-slate-500 h-[70%]'>
            <div className='flex items-center w-max h-full cursor-pointer active:scale-[0.98]'>
              <p className='flex w-max'>Junk Food</p>
              <div className='rounded-full border ml-4 border-black p-1 w-[50px] h-[50px] flex items-center justify-center'>
                <LinkSquare02Icon className='w-6 h-6' />
              </div>
            </div>
            <div className='relative h-[200px] top-[30px]'>
              <ThreeDModel url={'../public/eat.glb'} intensity={3} speed={1} scaleCustom={[2.4, 2.4, 2.4]} />
            </div>
            <div className='flex items-center w-max h-full cursor-pointer active:scale-[0.98]'>
              <p className='flex w-max'>Health Food</p>
              <div className='rounded-full border ml-4 border-black p-1 w-[50px] h-[50px] flex items-center justify-center'>
                <LinkSquare02Icon className='w-6 h-6' />
              </div>
            </div>
          </div>
          <div className='ml-auto h-full w-1/2 border-b border-b-slate-500'>
          </div>
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