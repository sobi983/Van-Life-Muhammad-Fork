import { useEffect, useState } from "react";
import '../server'

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(()=>{
    fetch('/api/vans')
    .then(res=>res.json())
    .then(data=> setVans(data.vans))
  }, [])
  console.log(vans)

  const vanElements = vans.map((van) => (
    <article key={van.id} className="van-title">
      <img src={van.imageUrl} alt="" />
      <div className="van.info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </article>
  ));

  return (
    <section>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">{vanElements}</div>
      </div>
    </section>
  );
}
