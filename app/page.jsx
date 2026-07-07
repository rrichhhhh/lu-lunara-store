export default function Home(){

const products=[
{
name:"Luna Heritage Watch",
price:"$8,900",
desc:"Swiss automatic movement crafted with timeless precision."
},
{
name:"Aurora Signature Bag",
price:"$6,500",
desc:"Italian leather masterpiece with refined details."
},
{
name:"Royal Moon Collection",
price:"Private Edition",
desc:"Exclusive creations reserved for collectors."
}
]


return(

<main>


{/* NAV */}

<nav>

<div className="logo">
LU LUNARA
</div>


<div className="links">

<a>Watches</a>
<a>Bags</a>
<a>Collections</a>
<a>Heritage</a>

</div>


<div className="actions">

<span>Search</span>
<span>Account</span>
<span>Bag (0)</span>

</div>


</nav>



{/* HERO */}


<section className="hero">


<div className="hero-light"></div>


<div className="hero-content">


<p className="eyebrow">
ESTABLISHED 2026 · PRIVATE LUXURY ATELIER
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



<div className="hero-product">


<div className="watch-glass">


<div className="watch">

</div>


</div>


</div>



</section>





{/* FEATURED */}



<section className="collection">


<p className="section-label">
FEATURED COLLECTION
</p>


<h2>
Signature Pieces
</h2>



<div className="cards">


{
products.map((item,index)=>(


<div className="card" key={index}>


<div className="product-image">

</div>


<div className="product-info">

<h3>
{item.name}
</h3>


<p>
{item.desc}
</p>


<strong>
{item.price}
</strong>


<a>
View Product →
</a>


</div>


</div>


))
}


</div>



</section>





{/* HERITAGE */}


<section className="heritage">


<div>


<p className="section-label">
OUR HERITAGE
</p>


<h2>
Born from precision.
<br/>
Defined by elegance.
</h2>


<p>

Every LU LUNARA creation combines
Swiss craftsmanship,
Italian leather artistry,
and timeless design philosophy.

</p>


</div>


</section>






{/* CRAFT */}


<section className="craft">


<div className="craft-box">


<h2>
Craftsmanship
</h2>


<p>

Hundreds of hours of refinement.
Every detail engineered for generations.

</p>


</div>


<div className="craft-box">


<h2>
Private Client
</h2>


<p>

Exclusive collections created
for collectors worldwide.

</p>


</div>


</section>






<footer>


<div className="logo">
LU LUNARA
</div>


<p>
Luxury Beyond Time
</p>


</footer>



</main>

)

}
