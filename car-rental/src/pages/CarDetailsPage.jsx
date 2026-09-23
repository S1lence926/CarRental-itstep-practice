import { Link, useNavigate, useParams } from "react-router";
import { cars } from "../data/cars";

export default function CarDetailsPage() {
  const { carId } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === Number(carId));

  if (!car) {
    return (
      <section>
        <h1>Автомобиль не найден</h1>
        <button className="btn" onClick={() => navigate("/cars")}>
          ← Назад к каталогу
        </button>
      </section>
    );
  }

  return (
    <section>
      <h1>
        {car.brand} {car.model}
      </h1>
      <p>Класс: {car.carClass}</p>
      <p>Год выпуска: {car.year}</p>
      <p>Коробка передач: {car.transmission}</p>
      <p>Количество мест: {car.seats}</p>
      <p className="car-price">{car.pricePerDay.toLocaleString("ru-RU")} ₸/день</p>
      <p>Здесь будет календарь доступности и расчёт стоимости аренды.</p>
      <Link to="/booking" className="btn">
        Забронировать
      </Link>{" "}
      <button className="btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>
    </section>
  );
}