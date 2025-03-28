import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
  <div
    ref={hoverButtonRef}
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
  >
    {/* Radial gradient hover effect */}
    <div
      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      style={{
        opacity: hoverOpacity,
        background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px,rgba(226, 101, 101, 0.53),rgb(0, 0, 0))`,
      }}
    />
    <TiLocationArrow className="relative z-20 text-red-600" />
    <p className="relative z-20 text-red-600 font-bold">E<b>n</b> savoir p<b>l</b>us</p>
  </div>
)}

      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Rejoignez l'élite de l'esport
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Intégrez une communauté passionnée, relevez de nouveaux défis et 
          évoluez aux côtés des meilleurs. L'aventure commence ici, avec <b>ERAH Esport</b>
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/academy.mp4"
          title={
            <>
              Inno<b>vat</b>ion
            </>
          }
          description="ERAH repousse les limites de l'esport avec des stratégies inédites, une formation d'élite et une vision ambitieuse pour rivaliser avec les meilleurs"
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/alsace-cod.mp4"
            title={
              <>
                Compé<b>tition</b>
              </>
            }
            description="Défiez, progressez, dominez"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/Final_final_video_for_Erah.mp4"
            title={
              <>
                Co<b>mmun</b>autés
              </>
            }
            description="Un écosystème en expansion pour rassembler et faire grandir notre communauté"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/oxwig.mp4"
            title={
              <>
                Va<b>l</b>orant
              </>
            }
            description="Nous évoluons sur Valorant pour rivaliser avec les meilleurs"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
  <div className="flex size-full flex-col justify-between bg-red-500 p-5">
    <h1 className="bento-title special-font max-w-64 text-black">
      E<b>n</b>core p<b>l</b>us à ve<b>n</b>ir
    </h1>

    <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
  </div>
</BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/omen.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
