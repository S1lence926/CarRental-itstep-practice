import { Link } from "react-router";

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <h3>
        {car.brand} {car.model}
      </h3>
      <p className="car-meta">
        {car.carClass} · {car.year} · {car.transmission}
      </p>
      <p className="car-price">{car.pricePerDay.toLocaleString("ru-RU")} ₸/день</p>
      <Link to={`/cars/${car.id}`} className="btn">
        Подробнее
      </Link>
    </article>
  );
}