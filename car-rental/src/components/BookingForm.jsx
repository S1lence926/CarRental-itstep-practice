import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Заполните имя и телефон");
      return;
    }
    setError("");
    alert(`Бронирование оформлено!\nИмя: ${form.name}\nТелефон: ${form.phone}`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Имя
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Телефон
        <input name="phone" value={form.phone} onChange={handleChange} />
      </label>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="btn">
        Подтвердить бронирование
      </button>
    </form>
  );
}