export default function Home() {
  const products = [
    {
      name: "Luna Heritage Watch",
      desc: "Swiss inspired precision timepiece",
    },
    {
      name: "Aurora Signature Bag",
      desc: "Italian leather luxury collection",
    },
    {
      name: "Royal Moon Collection",
      desc: "Private luxury selection",
    },
  ];

  return (
    <main>
      <nav>
        <div className="logo">LU LUNARA</div>

        <div className="menu">
          Watches　 Bags　 Collections　 Heritage　 Contact
        </div>
      </nav>

      <section className="hero">
        <h1>Luxury Beyond Time</h1>

        <p>
          Timeless watches and signature leather collections
          crafted for extraordinary moments.
        </p>

        <button>
          Explore Collection
        </button>
      </section>


      <section className="collection">

        <h2>Featured Collection</h2>

        <div className="grid">

          {products.map((item) => (
            <div className="card" key={item.name}>

              <div className="image">
                LU LUNARA
              </div>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <button>
                View Details
              </button>

            </div>
          ))}

        </div>

      </section>


      <section className="heritage">

        <h2>Our Heritage</h2>

        <p>
          Every LU LUNARA creation represents elegance,
          craftsmanship and timeless luxury.
        </p>

      </section>


      <footer>
        © 2026 LU LUNARA Luxury House
      </footer>

    </main>
  );
}
