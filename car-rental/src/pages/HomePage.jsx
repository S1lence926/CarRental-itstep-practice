import { Link } from "react-router";

export default function HomePage() {
  return (
    <section>
      <h1>Аренда автомобилей без лишних хлопот</h1>
      <p>
        CarRental помогает за пару минут найти свободный автомобиль на нужные
        даты, рассчитать стоимость аренды и оформить бронь онлайн.
      </p>
      <Link to="/cars" className="btn">
        Выбрать автомобиль
      </Link>
    </section>
  );
}