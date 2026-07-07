export default function Home(){

const products=[
{
name:"Luna Heritage Watch",
desc:"Swiss automatic movement crafted for timeless elegance.",
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d"
},
{
name:"Aurora Signature Bag",
desc:"Italian leather masterpiece with refined details.",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
name:"Royal Moon Collection",
desc:"Private luxury collection for exclusive clients.",
image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
}
]


return(

<main>


<nav>

<div className="logo">
LU LUNARA
</div>


<div>
<a>Watches</a>
<a>Bags</a>
<a>Collections</a>
<a>Heritage</a>
<a>Contact</a>
</div>


</nav>



<div className="hero">


<div>


<h1>
Luxury Beyond Time
</h1>


<p>
Exceptional watches and leather creations crafted for timeless elegance.
</p>


<button>
Explore Collection
</button>


</div>



</div>




<section>

<h2>
Featured Collection
</h2>



<div className="product-grid">


{
products.map((p,i)=>(

<div className="product-card" key={i}>


<img src={p.image}/>


<h3>
{p.name}
</h3>


<p>
{p.desc}
</p>


<button>
View Details
</button>


</div>


))
}



</div>


</section>




<section className="heritage">


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
