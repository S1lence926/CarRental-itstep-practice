import { NavLink } from "react-router";

export default function Header() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="header">
      <span className="logo">CarRental</span>
      <nav>
        <NavLink to="/" end className={linkClass}>
          Главная
        </NavLink>
        <NavLink to="/cars" className={linkClass}>
          Каталог
        </NavLink>
        <NavLink to="/my-bookings" className={linkClass}>
          Мои бронирования
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          О сервисе
        </NavLink>
      </nav>
    </header>
  );
}