import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/contact-4.png"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/contact-4.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
        <p className="mb-10 font-general text-[10px] uppercase">
          Faites partie de l'aventure Erah
        </p>

          <AnimatedTitle
            title="T<b>e</b>nt<b>e</b>r v<b>o</b>tr<b>e</b> ch<b>a</b>nc<b>e</b>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

        <a href="https://app-erahesport.com/">
          <Button title="Postuler" containerClass="mt-10 cursor-pointer" />
        </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
