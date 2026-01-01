import './App.css'

import propolisImg from './assets/Propolis.png'
import royalJellyImg from './assets/royal_jelly.jpg'
import royalJellyBgImg from './assets/royal_jelly_2.jpg'
import honeyImg from './assets/add.jpg'

function App() {
  const products = [
    {
      id: 'honey',
      name: 'Mjaltë',
      image: honeyImg,
      description:
        'Natyralisht i ëmbël dhe i butë. I përsosur për çaj, mëngjes, gatim ose direkt me lugë.',
    },
    {
      id: 'royal-jelly',
      name: 'Qumësht Mbretëror',
      image: royalJellyImg,
      description:
        'Një produkt premium i bletës me teksturë të pasur dhe kremoze. I preferuar për ata që kërkojnë diçka të veçantë nga kosherja.',
    },
    {
      id: 'propolis',
      name: 'Propolis',
      image: propolisImg,
      description:
        "Një rrëshirë natyrale e mbledhur nga bletët dhe e përdorur në koshere. Propolisi ka aromë të thellë dhe zgjidhet shpesh për karakterin e tij të fortë.",
    },
  ]

  const stats = [
    { label: 'Eksperiencë', value: '10+ vite' },
    { label: 'Produkte', value: '100% natyrale & bio' },
    { label: 'Përshtypje klientësh', value: '100% pozitive' },
  ]

  return (
    <div
      className="page"
      style={{
        '--heroPhoto': `url(${royalJellyBgImg})`,
        '--pagePhoto': `url(${honeyImg})`,
      }}
    >
      <div className="cornerDecor" aria-hidden="true">
        <img className="cornerImg cornerTL" src={propolisImg} alt="" />
        <img className="cornerImg cornerTR" src={royalJellyImg} alt="" />
        <img className="cornerImg cornerBL" src={honeyImg} alt="" />
        <img className="cornerImg cornerBR" src={royalJellyBgImg} alt="" />
      </div>

      <header className="hero" aria-label="Produktet e bletës Kristi">
        <div className="heroInner">
          <p className="kicker"></p>
          <div className="titleRow">
            <img className="titleIcon" src="/bee.svg" alt="Bletë" />
            <h1 className="title">Produktet e Bletës</h1>
          </div>
          <p className="subtitle">
            Propolis, Qumësht Mbretëror dhe Mjaltë — produkte të thjeshta e natyrale, me paraqitje të pastër dhe kontakt të lehtë.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#products">
              Shiko produktet
            </a>
            <a className="secondaryBtn" href="#contact">
              Kontakt
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section fadeIn" aria-label="Informacion">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Pse të na zgjidhni</h2>
            <p className="sectionSubtitle">
              Produkte të përzgjedhura nga bleta, me fokus te cilësia dhe komunikimi i shpejtë.
            </p>
          </div>

          <div className="statsGrid">
            {stats.map((item) => (
              <div key={item.label} className="statCard">
                <p className="statValue">{item.value}</p>
                <p className="statLabel">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="section fadeIn" aria-label="Produktet">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Produktet</h2>
            <p className="sectionSubtitle">Imazhe dhe përshkrime të shkurtra për secilin produkt.</p>
          </div>

          <div className="grid">
            {products.map((product) => (
              <article key={product.id} className="productCard">
                <div className="productMedia">
                  <img className="productImage" src={product.image} alt={product.name} />
                </div>
                <div className="productBody">
                  <h3 className="productTitle">{product.name}</h3>
                  <p className="productDescription">{product.description}</p>
                  <a className="cardLink" href="#contact">
                    Kontakto për porosi
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section fadeIn" aria-label="Kontakt">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Kontakt</h2>
            <p className="sectionSubtitle">Na kontakto për porosi ose për më shumë informacion.</p>
          </div>

          <div className="contactGrid">
            <div className="contactCard">
              <h3 className="contactTitle">Telefon</h3>
              <p className="contactText">
                <a className="contactLink" href="tel:+355689302137">
                  +355689302137
                </a>
              </p>
            </div>
            <div className="contactCard">
              <h3 className="contactTitle">Email</h3>
              <p className="contactText">
                <a className="contactLink" href="mailto:kristileshi03@icloud.com">
                  kristileshi03@icloud.com
                </a>
              </p>
            </div>
            <div className="contactCard">
              <h3 className="contactTitle">WhatsApp</h3>
              <p className="contactText">
                <a
                  className="contactLink"
                  href="https://wa.me/355682596332"
                  target="_blank"
                  rel="noreferrer"
                >
                  +355682596332
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footerText">© {new Date().getFullYear()} Produktet e Bletës</p>
      </footer>
    </div>
  )
}

export default App
