export default function Home(){

const products=[
{
name:"Luna Heritage Watch",
type:"Swiss Automatic",
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Aurora Signature Bag",
type:"Italian Leather",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
name:"Royal Moon Collection",
type:"Private Edition",
image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
},
{
name:"Noir Atelier",
type:"Limited Series",
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a93"
}
]


return(

<main>

<header className="header">

<div className="logo">
LU LUNARA
</div>


<nav>

<a>Watches</a>
<a>Bags</a>
<a>Collections</a>
<a>Heritage</a>
<a>Contact</a>

</nav>


<div className="tools">
EN / USD
&nbsp;
♡
&nbsp;
🛒
</div>


</header>



<section className="hero">

<p>
ESTABLISHED 2026 · LUXURY ATELIER
</p>


<h1>
Luxury<br/>
Beyond Time
</h1>


<div className="subtitle">
Exceptional watches and leather creations crafted for timeless elegance.
</div>


<button>
Explore Collection
</button>


</section>




<section className="featured">


<div className="sectionTitle">

<h2>
Featured Collection
</h2>

<p>
Exceptional pieces selected from our private atelier.
</p>

</div>



<div className="productGrid">


{products.map((item,index)=>(

<div className="card" key={index}>

<img src={item.image}/>


<div className="info">

<h3>
{item.name}
</h3>


<p>
{item.type}
</p>


</div>


</div>

))}


</div>


</section>





<section className="story">

<h2>
The Art Of Timeless Luxury
</h2>

<p>
LU LUNARA creates refined watches and leather masterpieces
for collectors who value craftsmanship, rarity and heritage.
</p>


</section>



<footer>

<div>
Language
</div>

<div>
Currency
</div>

<div>
Payment
</div>


</footer>


</main>

)

}
