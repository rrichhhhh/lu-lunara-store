export default function Home() {

const products = [
{
name:"Luna Heritage Watch",
desc:"Swiss automatic movement. Crafted for timeless elegance."
},
{
name:"Aurora Signature Bag",
desc:"Italian leather masterpiece with refined details."
},
{
name:"Royal Moon Collection",
desc:"Private luxury collection for exclusive clients."
}
];


return (
<main>

<nav>
<div className="logo">
LU LUNARA
</div>

<div className="menu">
<span>Watches</span>
<span>Bags</span>
<span>Collections</span>
<span>Heritage</span>
<span>Contact</span>
</div>
</nav>


<section className="hero">

<h1>
Luxury Beyond Time
</h1>

<p>
Exceptional watches and leather creations crafted for timeless elegance.
</p>

<button>
Explore Collection
</button>

</section>



<section className="collection">

<h2>
Featured Collection
</h2>


<div className="grid">

{
products.map((item,index)=>(

<div className="card" key={index}>

<div className="image">
LUNARA
</div>


<h3>
{item.name}
</h3>

<p>
{item.desc}
</p>


<button>
View Details
</button>


</div>

))
}


</div>


</section>



<section className="story">

<h2>
Our Heritage
</h2>

<p>
A modern luxury house inspired by precision, craftsmanship and timeless design.
</p>

</section>


</main>
)

}
