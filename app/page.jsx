import Link from "next/link";


export default function Home(){


return (

<main>


<header className="navbar">

<div className="logo">
LU LUNARA
</div>


<nav>

<Link href="/products">
Watches
</Link>

<Link href="/products">
Bags
</Link>

<Link href="/heritage">
Heritage
</Link>

<Link href="/contact">
Contact
</Link>


</nav>


<div className="tools">

<span>
EN
</span>

<span>
USD $
</span>

</div>


</header>



<section className="hero">


<div className="hero-text">


<p className="small-title">
ESTABLISHED 2026 · LUXURY ATELIER
</p>


<h1>

Luxury
<br/>
Beyond Time

</h1>



<p className="description">

Exceptional watches and leather creations
crafted for timeless elegance.

</p>



<button>

Explore Collection

</button>


</div>



<div className="hero-light"></div>


</section>



<section className="statement">


<h2>
The Art Of Timeless Creation
</h2>


<p>

Swiss precision.
Italian craftsmanship.
Designed for generations.

</p>


</section>


</main>


)

}
