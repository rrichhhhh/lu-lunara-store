export default function Home() {

const products = [
{
name:"Luna Heritage Watch",
type:"Swiss Automatic Timepiece",
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Aurora Signature Bag",
type:"Italian Leather Collection",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
name:"Royal Moon Collection",
type:"Private Luxury Edition",
image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
}
];


return (

<main>

<section className="hero">

<div className="heroGlow"></div>

<div className="heroContent">

<p className="eyebrow">
ESTABLISHED 2026 · LUXURY ATELIER
</p>


<h1>
Luxury
<br/>
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

<div className="sectionTitle">

<p>FEATURED COLLECTION</p>

<h2>
Signature Pieces
</h2>

</div>



<div className="grid">

{products.map((item,index)=>(

<div className="card" key={index}>


<img src={item.image}/>


<div className="cardInfo">

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


<div>

<p>
OUR HERITAGE
</p>


<h2>
Crafted Beyond Generations
</h2>


<p className="text">

LU LUNARA creates refined watches and leather
masterpieces inspired by traditional craftsmanship,
modern architecture and timeless luxury.

</p>

</div>


</section>





<footer>

<div className="logo">
LU LUNARA
</div>


<div>
Watches　 Bags　 Collections　 Heritage　 Contact
</div>


</footer>


</main>

)

}
