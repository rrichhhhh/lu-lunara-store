export default function Home() {
  const products = [
    {
      name: "Luna Heritage Watch",
      type: "Swiss Automatic Timepiece",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
    },
    {
      name: "Aurora Signature Bag",
      type: "Italian Leather Collection",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
    },
    {
      name: "Royal Moon Collection",
      type: "Private Luxury Edition",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
    }
  ];

  return (
    <main className="luxury-page">

      <nav className="luxury-nav">

        <div className="brand">
          LU LUNARA
        </div>

        <div className="nav-links">
          <span>Watches</span>
          <span>Bags</span>
          <span>Collections</span>
          <span>Heritage</span>
          <span>Contact</span>
        </div>

      </nav>


      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            ESTABLISHED 2026 · LUXURY ATELIER
          </p>


          <h1>
            Luxury
            <br />
            Beyond Time
          </h1>


          <p className="subtitle">
            Exceptional watches and leather creations
            crafted for timeless elegance.
          </p>


          <button>
            Explore Collection
          </button>


        </div>

      </section>



      <section className="collection">

        <div className="section-title">

          <p>
            FEATURED COLLECTION
          </p>

          <h2>
            Signature Pieces
          </h2>

        </div>


        <div className="products">

          {products.map((item,index)=>(

            <div className="card" key={index}>

              <div
                className="image"
                style={{
                  backgroundImage:`url(${item.image})`
                }}
              />

              <div className="info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.type}
                </p>


                <span>
                  Discover →
                </span>

              </div>

            </div>

          ))}

        </div>


      </section>



      <section className="heritage">

        <p>
          THE LUNARA PHILOSOPHY
        </p>

        <h2>
          Crafted For Generations
        </h2>

        <div className="line"></div>

        <span>
          A pursuit of precision, beauty and
          enduring craftsmanship.
        </span>

      </section>



      <footer>

        <div>
          LU LUNARA
        </div>

        <p>
          Luxury watches · Leather creations · Timeless design
        </p>

      </footer>


    </main>
  );
}
