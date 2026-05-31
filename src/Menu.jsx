import { Link } from 'react-router-dom';

const menuData = [
  {
    id: 'coffee',
    eyebrow: 'COFFEES',
    title: 'Hot Drinks',
    intro: 'Classic espresso-based favourites to warm your morning or afternoon.',
    bannerImage:
      'cappuccino.png',
    items: [
      {
        name: 'Americano',
        price: '€3.30',
        description: 'Rich espresso balanced with hot water for a clean finish.',
        sizes: [
          { label: 'Medium', price: '€3.60' },
          { label: 'Large', price: '€4.10' },
        ],
      },
      {
        name: 'Cappuccino',
        price: '€3.80',
        description: 'Creamy steamed milk poured over smooth espresso.',
      },
      {
        name: 'Espresso',
        price: '€3.00',
        description: 'Soft milk texture blended with our signature espresso.',
        sizes: [
          { label: 'Double', price: '€5.80' },
        ],
      },
      {
        name: 'Latte',
        price: '€3.20',
        description: 'A velvety milk layer over a strong espresso base.',
        sizes: [
          { label: 'Large', price: '€3.70' },
        ],
        options: [
          { label: 'Vanilla', price: '€0.50' },
          { label: 'Caramel', price: '€0.50' },
          { label: 'Hazelnut', price: '€0.50' },
        ],
      },
      {
        name: 'Hot Chocolate',
        price: '€4.20',
        description: 'Rich cocoa blended with steamed milk for a comforting treat.',
      },
    ],
  },
  {
    id: 'cold-drinks',
    eyebrow: 'Iced Coffee',
    title: 'Cool Drinks',
    intro: 'Refreshing chilled coffee crafted for warm afternoons.',
    bannerImage:
      'IcedCoffee.png',
    items: [
      {
        name: 'Iced Coffee',
        price: '€4.20',
        description: 'Chilled coffee poured over ice for a refreshing boost.',
        sizes: [
          { label: 'Large', price: '€4.60' },
        ],
      },
    ],
  },
  {
    id: 'cakes',
    eyebrow: 'Cakes & Treats',
    title: 'Sweet Bites',
    intro: 'House-made pastries and sweets, perfect with your coffee.',
    bannerImage:
      'rockyroad.png',
    items: [
      {
        name: 'Rocky Road Slice',
        price: '€6.00',
        description: 'Dense and fudgy with a crisp top.',
      },
    ],
  },
];

function Menu() {
  return (
    <section className="menu-page">
      <div className="menu-page-header">
        <div>
          <p className="section-eyebrow"></p>
          <h1>Menu</h1>
          <p>
            Browse every category and discover the seasonal drinks, treats, and bites designed to feel warm,
            elegant, and welcoming.
          </p>
        </div>

      </div>

      <div className="menu-list">
        {menuData.map((category) => (
          <article key={category.id} className="menu-section">
            <div className="menu-section-heading">
              <span className="menu-section-eyebrow">{category.eyebrow}</span>
              <h2>{category.title}</h2>
              <p>{category.intro}</p>
            </div>

            <div
              className="menu-section-banner"
              style={{ backgroundImage: `url(${category.bannerImage})` }}
            />

            <div className="menu-items-list">
              {category.items.map((item) => (
                <div key={item.name} className="menu-item-row">
                  <div className="menu-item-copy">
                    <div className="menu-item-title">
                      <h3>{item.name}</h3>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                    {item.sizes && (
                      <p className="menu-item-meta">
                        <strong>Sizes:</strong> {item.sizes.map((size) => `${size.label} ${size.price}`).join(', ')}
                      </p>
                    )}
                    {item.options && (
                      <p className="menu-item-meta">
                        <strong>Flavor options:</strong> {item.options.map((option) => `${option.label} +${option.price}`).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>info@thelazycowcoffeehouse.com</p>
      <div className="footer-actions">
        <a href="https://www.instagram.com/thelazycowcoffeehouse/" target="_blank" rel="noreferrer" className="social-button">
          <span className="social-icon instagram" aria-hidden="true"></span>
          Instagram
        </a>
        <a href="https://www.facebook.com/TheLazyCowTrailer" target="_blank" rel="noreferrer" className="social-button">
          <span className="social-icon facebook" aria-hidden="true"></span>
          Facebook
        </a>
      </div>
      <p>© 2026 by The Lazy Cow Coffee House.</p>
    </footer>
  );
}

export default Menu;
