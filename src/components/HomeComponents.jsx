// icons
import { BsStars } from "react-icons/bs";
// element
import ButtonBlue from "../elements/ButtonBlue";
// images
import home1 from "../assets/images/react.svg";
import home2 from "../assets/images/tailwind.svg";
import home3 from "../assets/images/gsap.svg";

const HomeComponents = () => {
  const imageItem = [home1, home2, home3];
  return (
    <section
      id="home"
      className="container-primary min-h-screen flex-col gap-5 text-center justify-center mt-10 py-16"
    >
      <div
        className="flex items-center gap-2 h-8 bg-gradient-to-t from-blue-700 to-blue-500 text-white px-4 rounded-full"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <BsStars />
        <p className="font-medium">Biznova-Development</p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          className="text-gray-900 font-extrabold text-4xl md:text-7xl md:leading-tight md:max-w-5xl"
        >
          Modern Digital Solutions For Your <span>Business</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          className="text-gray-800 font-medium max-w-xl"
        >
          We create fast, modern, and responsive websites to help your business
          grow in the digital world.
        </h2>
      </div>
      <div
        className="flex flex-wrap gap-2 items-center justify-center mt-3"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        <ButtonBlue text={"Get Started"} />
        <ButtonBlue text={"Purchase Now"} />
      </div>
      <div
        className="flex items-center justify-center gap-5 mt-3"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        {imageItem.map((item, i) => (
          <div
            key={i}
            className="w-20 h-20 shadow-xl bg-white rounded-full flex items-center justify-center group cursor-pointer"
          >
            <img
              src={item}
              alt="image-home"
              className="h-12 w-12 group-hover:rotate-[360deg] duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeComponents;
