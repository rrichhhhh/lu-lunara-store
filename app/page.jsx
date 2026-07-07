export default function Home(){

const products=[
{
name:"Luna Heritage Watch",
desc:"Swiss automatic movement. Crafted for generations.",
image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
},
{
name:"Aurora Signature Bag",
desc:"Italian leather masterpiece.",
image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"
},
{
name:"Royal Moon Collection",
desc:"Private collection for collectors.",
image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
}
]


return(

<div className="site">


<nav>

<div className="logo">
LU LUNARA
</div>

<div className="links">
<span>Watches</span>
<span>Bags</span>
<span>Collections</span>
<span>Heritage</span>
<span>Contact</span>
</div>

</nav>



<section className="hero">

<div className="glow"></div>


<div className="heroText">

<p className="small">
ESTABLISHED 2026 · LUXURY MAISON
</p>


<h1>
Luxury
<br/>
Beyond Time
</h1>


<p>
Exceptional watches and leather creations
crafted for timeless elegance.
</p>


<button>
EXPLORE COLLECTION
</button>


</div>


</section>



<section className="collection">


<h2>
Featured Collection
</h2>


<div className="cards">


{
products.map((item,index)=>(

<div className="card" key={index}>

<img src={item.image}/>

<div className="cardInfo">

<h3>
{item.name}
</h3>

<p>
{item.desc}
</p>

</div>

</div>

))
}


</div>


</section>




<section className="heritage">

<div>

<h2>
The Art Of Heritage
</h2>

<p>
Every creation represents precision,
craftsmanship and timeless luxury.
</p>

</div>

</section>



<footer>

LU LUNARA © 2026

</footer>


</div>


)

}
