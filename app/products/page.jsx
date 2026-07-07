export default function Products(){


const items=[

{
name:"Luna Heritage Watch",
price:"$8,900",
category:"Watches"
},

{
name:"Aurora Signature Bag",
price:"$6,500",
category:"Bags"
},

{
name:"Royal Moon Watch",
price:"$12,000",
category:"Limited Edition"
}


]


return(

<main className="products-page">


<h1>
Private Collection
</h1>


<p>
Exceptional creations crafted for collectors.
</p>



<div className="product-grid">


{
items.map((item,index)=>(


<div className="product-card" key={index}>


<div className="product-photo">

</div>


<h2>
{item.name}
</h2>


<p>
{item.category}
</p>


<strong>
{item.price}
</strong>


<button>
View Detail
</button>


</div>


))
}



</div>


</main>


)

}
