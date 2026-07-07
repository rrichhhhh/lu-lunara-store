export default function Home() {
  const products = [
    ["Luna Heritage Watch", "Precision crafted timepiece"],
    ["Aurora Signature Bag", "Italian leather collection"],
    ["Royal Moon Collection", "Private luxury selection"]
  ];

  return (
    <main>
      <nav>
        <b>LU LUNARA</b>
        <span>Watches　 Bags　 Collections　 Heritage　 Contact</span>
      </nav>

      <section className="hero">
        <h1>Luxury Beyond Time</h1>
        <p>Timeless watches and signature leather collections.</p>
        <button>Explore Collection</button>
      </section>

      <section>
        <h2>Featured Collection</h2>
        <div className="grid">
          {products.map((p)=>
            <div className="card" key={p[0]}>
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <button>View Details</button>
            </div>
          )}
        </div>
      </section>

      <section className="story">
        <h2>Our Heritage</h2>
        <p>
          Every piece is designed for those who appreciate craftsmanship,
          elegance and unforgettable moments.
        </p>
      </section>

      <div className="chat">💬 Private Client Assistant</div>
    </main>
  );
}