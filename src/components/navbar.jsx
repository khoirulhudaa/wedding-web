import { Logo } from '../assets'

const Navbar = () => {
  return (
    <nav className='w-screen z-[99999] border-y border-y-black fixed left-0 h-max top-0 flex items-center justify-between py-4 px-6 bg-white'>
      
      {/* Left Content - (Logo) */}
      <img src={Logo} alt='Logo Luvlywed' className='w-[7rem]' />
      
      {/* Right Content - (List Menu) */}
      <div className='relative min-w-[30vw]'>
        <ul className='w-full text-[14.5px] flex justify-between items-center'>
          <li>Photography</li>
          <li>Make-up Artist</li>
          <li>Catering</li>
          <li>Building</li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar