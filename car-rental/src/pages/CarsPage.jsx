import { useState } from "react";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";
import EmptyState from "../components/EmptyState";

export default function CarsPage() {
  const [carClass, setCarClass] = useState("all");

  const classes = ["all", ...new Set(cars.map((c) => c.carClass))];
  const filtered =
    carClass === "all" ? cars : cars.filter((c) => c.carClass === carClass);

  return (
    <section>
      <h1>Каталог автомобилей</h1>
      <div className="filters">
        {classes.map((c) => (
          <button
            key={c}
            className={c === carClass ? "filter active" : "filter"}
            onClick={() => setCarClass(c)}
          >
            {c === "all" ? "Все" : c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <EmptyState text="Нет автомобилей по выбранному фильтру" />
      ) : (
        <div className="cars-grid">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}