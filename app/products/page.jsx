import {products} from "@/data/products";


export default function Products(){


return (

<main>


<section className="products">


<h1>
Collections
</h1>



<div className="grid">


{
products.map((item)=>(


<div className="card" key={item.id}>


<img
src={item.image}
/>



<h2>

{item.name.en}

</h2>


<p>

${item.price.toLocaleString()}

</p>


<button>

View Details

</button>



</div>


))

}


</div>


</section>


</main>

)

}
