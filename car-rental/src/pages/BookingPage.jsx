import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <section>
      <h1>Бронирование</h1>
      <p>Оставьте контактные данные — даты и стоимость подтянутся из карточки авто.</p>
      <BookingForm />
    </section>
  );
}