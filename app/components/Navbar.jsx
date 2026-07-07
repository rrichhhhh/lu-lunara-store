import Link from "next/link";


export default function Navbar(){

return (

<header className="navbar">


<div className="logo">
LU LUNARA
</div>


<nav>


<Link href="/">
Home
</Link>


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



<div className="selectors">


<select>

<option>
EN
</option>

<option>
中文
</option>

<option>
日本語
</option>

<option>
Français
</option>

</select>



<select>

<option>
USD $
</option>

<option>
EUR €
</option>

<option>
GBP £
</option>

<option>
JPY ¥
</option>

<option>
CNY ¥
</option>


</select>


</div>


</header>

)

}
