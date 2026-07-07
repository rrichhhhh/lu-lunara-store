export default function Home() {
  const products = [
    {
      name: "Luna Heritage Watch",
      desc: "Swiss inspired luxury timepiece"
    },
    {
      name: "Aurora Signature Bag",
      desc: "Italian leather masterpiece"
    },
    {
      name: "Royal Moon Collection",
      desc: "Private luxury selection"
    }
  ];

  return (
    <main>

      <nav>
        <b>LU LUNARA</b>
        <span>
          Watches　 Bags　 Collections　 Heritage　 Contact
        </span>
      </nav>


      <section className="hero">
        <h1>Luxury Beyond Time</h1>
        <p>
          Exceptional watches and leather creations
          crafted for timeless elegance.
        </p>

        <button>
          Explore Collection
        </button>
      </section>


      <section>
        <h2>Featured Collection</h2>

        <div className="grid">

          {products.map((p)=>(
            <div className="card" key={p.name}>

              <div className="image">
                LUNARA
              </div>

              <h3>{p.name}</h3>

              <p>{p.desc}</p>

              <button>
                View Details
              </button>

            </div>
          ))}

        </div>

      </section>


      <section className="heritage">

        <h2>
          Our Heritage
        </h2>

        <p>
          Designed for collectors who appreciate
          craftsmanship, rarity and timeless beauty.
        </p>

      </section>


    </main>
  );
}
