import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const MySection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const bestTeamsData = [
      { id: 1, name: 'Real Madrid', country: 'Spain', coach: 'Carlo Ancelotti', stadium: 'Santiago Bernabeu', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', websiteUrl: 'https://www.realmadrid.com/' },
      { id: 2, name: 'FC Barcelona', country: 'Spain', coach: 'Xavi Hernandez', stadium: 'Camp Nou', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/200px-FC_Barcelona_%28crest%29.svg.png', websiteUrl: 'https://www.fcbarcelona.com/' },
      { id: 3, name: 'Manchester United', country: 'England', coach: 'Ralf Rangnick', stadium: 'Old Trafford', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', websiteUrl: 'https://www.manutd.com/' },
      { id: 4, name: 'Bayern Munich', country: 'Germany', coach: 'Julian Nagelsmann', stadium: 'Allianz Arena', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_München_logo_%282017%29.svg', websiteUrl: 'https://fcbayern.com/' },
      { id: 5, name: 'Juventus', country: 'Italy', coach: 'Massimiliano Allegri', stadium: 'Allianz Stadium', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/120px-Juventus_FC_2017_icon_%28black%29.svg.png', websiteUrl: 'https://www.juventus.com/' }
    ];
    setData(bestTeamsData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">My Section - Los Mejores Equipos del Mundo</h1>
      <nav>
        {/* Navbar */}
      </nav>
      <div>
        {/* Carousel */}
        <Slider {...settings}>
          {data.map(team => (
            <div key={team.id}>
              <img src={team.logoUrl} alt={team.name} style={{ maxWidth: '200px', maxHeight: '200px', margin: '0 auto' }} />
              <h3>{team.name}</h3>
              <p>{team.country}</p>
              <p><strong>Entrenador:</strong> {team.coach}</p>
              <p><strong>Estadio:</strong> {team.stadium}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-8">
        {/* Table */}
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Coach</th>
              <th className="px-4 py-2">Stadium</th>
            </tr>
          </thead>
          <tbody>
            {data.map(team => (
              <tr key={team.id}>
                <td className="border px-4 py-2">{team.id}</td>
                <td className="border px-4 py-2">{team.name}</td>
                <td className="border px-4 py-2">{team.country}</td>
                <td className="border px-4 py-2">{team.coach}</td>
                <td className="border px-4 py-2">{team.stadium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        {/* Buttons */}
        {data.map(team => (
          <a key={team.id} href={team.websiteUrl} target="_blank" rel="noopener noreferrer" className="button inline-block mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded-md">{`Visit ${team.name}`}</a>
        ))}
      </div>
    </div>
  );
};

export default MySection;
