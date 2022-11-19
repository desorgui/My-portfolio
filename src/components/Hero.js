import Profile from '../images/profile.png';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Hi I am</span>
                  <span className="block text-indigo-600 xl:inline"> Desor Guishny</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  I'm a based web designer & full-stack developer focused on crafting clean & user-friendly experiences,
                  I am passionate about building excellent software that improves the lives of those around me.
                  </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Check Github</a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Download my CV</a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-80 bg-blue-900 w-full overflow-hidden -rotate-[60deg] rounded-l-full pt-8 hero-img">
            <img className="w-full lg:h-auto lg:w-full rotate-[58deg] -translate-x-44 -translate-y-52" src={Profile} alt="Profile" />
          </div>
          <div className="absolute bg-gray-900 p-4 rounded-lg text-white z-9999 bottom-8 left-8 flex flex-col"><span className="text-3xl">20+</span> <span>Professional projects</span></div>
        </div>
      </div>
  );
};

export default Hero;