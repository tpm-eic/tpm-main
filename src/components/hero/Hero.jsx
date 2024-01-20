import HeroSVG from "../../assets/hero.svg";
import Logo from "../../assets/tpm_logo.png";

const Hero = () => {
  return (
    <div className="p-4 w-full flex justify-between">
      <img src={HeroSVG} alt="Project Management Image" className="w-[40%]" />
      <div className="w-[60%] flex flex-col items-center justify-center">
        <img src={Logo} alt="TPM Logo" className="mb-2" />
        <h1 className="text-4xl font-semibold">
          Welcome to Total Project Management, LLC.
        </h1>
        <h2 className="text-xl">
          A Computer Aided Drafting and Design Company
        </h2>
        {/* <p className="text-center">
          For over 25 years, our dedication to detail has been unwavering. We
          are committed to providing personalized guidance and attention to each
          of our clients. Seeking a strategic alliance or a unique skill set?
          Contact us. Together, we'll craft and perfect your pathway to success.
          Just as we've grown and evolved through collaboration, we're here to
          help you do the same.
        </p> */}
      </div>
    </div>
  );
};

export default Hero;
