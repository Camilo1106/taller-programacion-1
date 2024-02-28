import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Developers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const data = [
    {
      name: `Brais Moure`,
      img: `../src/assets/Photos/brais.webp`,
      reseña: ` es un desarrollador de software y creador de contenido español conocido por su canal de YouTube donde comparte tutoriales y consejos sobre desarrollo web y tecnología.`,
      review: `Developer`,
      linkGIT: 'https://www.github.com/mouredev',
      linkTWI: 'https://www.twitter.com/MoureDev',
      linkYOU: 'https://www.youtube.com/@mouredev',
    },
    {
      name: `Facundo Garcia`,
      img: `../src/assets/Photos/facundo.webp`,
      reseña: `es un desarrollador y creador de contenido argentino conocido por su canal de YouTube donde comparte tutoriales y contenido educativo sobre desarrollo web y tecnología.`,
      review: `Developer`,
      linkGIT: 'https://github.com/facmartoni',
      linkTWI: 'https://www.twitter.com/facmartoni',
      linkYOU: 'https://www.youtube.com/@tigremartoni',
    },
    {
      name: `Midudev`,
      img: `../src/assets/Photos/midudev.png`,
      reseña: ` es el seudónimo de Miguel Ángel Durán, un desarrollador y creador de contenido español conocido por su canal de YouTube donde comparte tutoriales y contenido educativo sobre programación y tecnología.`,
      review: `Developer`,
      linkGIT: 'https://www.github.com/midudev',
      linkTWI: 'https://www.twitter.com/midudev',
      linkYOU: 'https://www.youtube.com/@midulive',
    },
  ];

  return (
    <div className="bg-emerald-600">
      <nav className="bg-emerald-900 text-white text-center p-4">
        <h1 className="text-xl font-bold">Developers</h1>
      </nav>
      <div className="h-[600px] w-3/4 m-auto mt-10">
        <Slider {...settings} className="relative">
          {data.map((d) => (
            <div key={d.name}>
              <div className="bg-white h-[500px] text-black rounded-xl flex flex-col items-center gap-5 p-5">
                <img src={d.img} alt="" className="h-60 w-44 rounded-full object-cover" />
                <div className="text-center">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-lg text-[17px]">{d.reseña}</p>
                  <div className="flex justify-center ">
                    <a href={d.linkGIT} target="_blank" rel="noopener noreferrer" className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex items-center justify-center">
                    <i className="fab fa-github mr-1"></i> Github
                    </a>
                    <a href={d.linkTWI} target="_blank" rel="noopener noreferrer" className="bg-blue-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex items-center justify-center">
                    <i className="fab fa-twitter mr-1"></i> Twitter
                    </a>
                    <a href={d.linkYOU} target="_blank" rel="noopener noreferrer" className="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex items-center justify-center">
                    <i className="fab fa-youtube mr-1"></i> Youtube
                    </a>
                  </div>
                  <p className="text-lg">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Developers;
