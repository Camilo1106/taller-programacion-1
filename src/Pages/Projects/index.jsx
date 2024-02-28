export default function Projects() {
  return (
    <div className="bg-emerald-50 text-light font-bold p-4">
      <h1 className="text-4xl mb-4">Proyectos importantes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="bg-emerald-300 text-xl font-semibold mb-2">React</h2>
          <p>React es una biblioteca JavaScript de código abierto utilizada para construir interfaces de usuario interactivas y de una sola página.</p>
          <p>Creador: Jordan Walke en Facebook.</p>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">Sitio web oficial de React</a>
          <img src="https://reactjs.org/logo-og.png" alt="Proyecto 1" className="mt-4" />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="bg-emerald-300 text-xl font-semibold mb-2">Vue.js</h2>
          <p>Vue.js es un marco de JavaScript de código abierto utilizado para construir interfaces de usuario y aplicaciones web interactivas.</p>
          <p>Creador: Evan You.</p>
          <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">Sitio web oficial de Vue.js</a>
          <img src="https://vuejs.org/images/logo.png" alt="Proyecto 2" className="mt-4" />
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="bg-emerald-300 text-xl font-semibold mb-2">Django</h2>
          <p>Django es un marco web de alto nivel basado en Python que fomenta el desarrollo rápido y limpio de aplicaciones web.</p>
          <p>Creador: Adrian Holovaty y Simon Willison.</p>
          <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">Sitio web oficial de Django</a>
          <img src="https://www.djangoproject.com/s/img/logos/django-logo-positive.png" alt="Proyecto 3" className="mt-4" />
        </div>
      </div>
    </div>
  );
}
