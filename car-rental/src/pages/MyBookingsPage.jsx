import StatusBadge from "../components/StatusBadge";
import EmptyState from "../components/EmptyState";

const bookings = [
  { id: 1, car: "Toyota Camry", dates: "12.10 — 14.10.2026", total: 36000, status: "active" },
  { id: 2, car: "Kia Rio", dates: "01.09 — 03.09.2026", total: 28500, status: "completed" },
];

export default function MyBookingsPage() {
  return (
    <section>
      <h1>Мои бронирования</h1>
      {bookings.length === 0 ? (
        <EmptyState text="У вас пока нет бронирований" />
      ) : (
        <ul className="bookings-list">
          {bookings.map((b) => (
            <li key={b.id} className="booking-item">
              <strong>{b.car}</strong> · {b.dates} ·{" "}
              {b.total.toLocaleString("ru-RU")} ₸ <StatusBadge status={b.status} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}