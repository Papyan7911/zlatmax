import { Link } from 'react-router-dom';
import './Firstsection.css';

function Firstsection() {
  const items = [
    { name: "Каталог ножей", href: "/catalog" },
    { name: "Клинковое оружие", href: "/catalog" },
    { name: "Сувенирные изделия", href: "/catalog" },
    { name: "Фонари ARMYTEK", href: "/catalog" },
    { name: "Сопуствующие товары", href: "/catalog" }
  ];

  return (
    <section className='firstsection'>
      <div className="container">
        <div className="firstsectionContent">
          <nav>
            <ul className='items'>
              {items.map((item, index) => (
                <li className='itemsContent' key={index}>
                  <Link className='itemContent' to={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Firstsection;
