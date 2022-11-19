// import Profile from '../images/profile.png';
import hoverDir from "hover-dir";

const Portfolio = () => {
  
  function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }
  
  const small = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
  }
  
  const element_small = document.querySelector('.icon-holder');
  const hover_elem = document.querySelectorAll('.hover');
  hoverDir(hover_elem);
  
  const animate = () => {
    
    let x_small = lerp(small.x1, small.x2, 0.3);
    let y_small = lerp(small.y1, small.y2, 0.3);
    element_small.style.transform = 'translate('+x_small+'px,'+y_small+'px)'
    small.x1 = x_small
    small.y1 = y_small
    
  }
  setInterval(()=>{
    animate()
  }, 60)
  document.addEventListener('mousemove', (e)=>{
    small.x2 = e.clientX-20
    small.y2 = e.clientY-20
  })

  document.querySelectorAll("a , .btn ,   textarea,   input  , .share-btn   , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .fwcb , .pr-det_btn , .cl-det-btn , .share-icon").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      element_small.classList.add("elem_hover");
    });
    el.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      element_small.classList.remove("elem_hover");
    });
  });

  return (
    <section className="relative text-gray-700 ">
      <div className="container parallax-wrap px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="item-container flex flex-wrap -m-1 md:-m-2">
          <div className="group flex flex-wrap w-1/3">
            <div className="hover relative w-full m-1 md:m-2 overflow-hidden rounded-lg duration-1000">
              <img alt="gallery" className="block group-hover:scale-105 duration-300 object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-80 duration-1000">element</div>
            </div>
          </div>
          <div className="group flex flex-wrap w-1/3">
            <div className="hover relative w-full m-1 md:m-2 overflow-hidden rounded-lg">
              <img alt="gallery" className="block group-hover:scale-105 duration-300 object-cover object-center w-full h-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-80 duration-1000">element</div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;