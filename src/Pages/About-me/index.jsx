import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-emerald-50 p-4">
      <h1 className="text-4xl font-bold mb-4">Camilo Estiben Hernandez Torres</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Experiencia Profesional</h2>
          <p>- Talento tech como desarrollador web Fullstack. (1 año)</p>
          <p>- Politécnico Grancolombiano como frontend. (1 año)</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Experiencia Académica</h2>
          <p>- Senior en desarrollo web Fullstack</p>
          <p>- Ingeniero de software</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Tecnologías y Herramientas</h2>
      <table className="mt-4 w-full">
        <thead>
          <tr className="bg-emerald-300">
            <th className="py-2 px-4">Tecnología</th>
            <th className="py-2 px-4">Nivel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">HTML</td>
            <td className="py-2 px-4">Avanzado</td>
          </tr>
          <tr>
            <td className="py-2 px-4">CSS</td>
            <td className="py-2 px-4">Avanzado</td>
          </tr>
          <tr>
            <td className="py-2 px-4">JavaScript</td>
            <td className="py-2 px-4">Intermedio</td>
          </tr>
          <tr>
            <td className="py-2 px-4">React</td>
            <td className="py-2 px-4">Intermedio</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Node.js</td>
            <td className="py-2 px-4">Intermedio</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8">Habilidades</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Desarrollo web</li>
        <li>Programación orientada a objetos</li>
        <li>Gestión de proyectos</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Proyecto 1</h3>
          <p>Participé en el desarrollo de una plataforma de e-learning que ofrecía cursos de capacitación empresarial. El proyecto incluía funcionalidades como registro de usuarios, gestión de cursos, seguimiento del progreso del usuario, y generación de certificados al completar un curso.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Proyecto 2</h3>
          <p>Desarrollé un CMS personalizado para una agencia de noticias que les permitía gestionar y publicar contenido en su sitio web. El CMS incluía funciones para crear, editar y eliminar noticias, así como gestionar usuarios con diferentes niveles de acceso.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Certificaciones</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Certificación en desarrollo web</li>
        <li>Certificación en React</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">Idiomas</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Español (nativo)</li>
        <li>Inglés (intermedio)</li>
      </ul>
    </div>
  );
}

export default AboutMe;
