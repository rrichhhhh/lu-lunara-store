export default function Home(){

const products=[
{
name:"Luna Heritage Watch",
desc:"Swiss automatic movement crafted with timeless precision."
},
{
name:"Aurora Signature Bag",
desc:"Italian leather masterpiece with refined details."
},
{
name:"Royal Moon Collection",
desc:"Private collection created for exclusive clients."
}
]


return(

<main>


<nav>

<div className="logo">
LU LUNARA
</div>


<div className="links">
<a>Watches</a>
<a>Bags</a>
<a>Collections</a>
<a>Heritage</a>
<a>Contact</a>
</div>

</nav>



<section className="hero">


<div className="glow"></div>


<div className="hero-content">


<p className="small">
ESTABLISHED 2026 · LUXURY ATELIER
</p>


<h1>
Luxury<br/>
Beyond Time
</h1>


<p className="subtitle">
Exceptional watches and leather creations crafted
for timeless elegance.
</p>


<button>
Explore Collection
</button>


</div>


</section>





<section className="collection">


<p className="section-title">
FEATURED COLLECTION
</p>



<div className="cards">


{
products.map((item,i)=>(

<div className="card" key={i}>

<div className="image">
</div>


<h3>
{item.name}
</h3>


<p>
{item.desc}
</p>


</div>


))
}



</div>


</section>


</main>

)

}
