"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

const timeOptions = [
  ["09:00", "9:00 AM"],
  ["10:30", "10:30 AM"],
  ["12:00", "12:00 PM"],
  ["13:30", "1:30 PM"],
  ["15:00", "3:00 PM"],
];

export default function ShowroomBookingForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().slice(0, 10);
  }, []);

  async function submit(event) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/showroom-visit", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to book the showroom visit.");
      setStatus("success");
      setMessage(data.message);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "We could not book your visit. Please try again.");
    }
  }

  return (
    <form className="showroomBookingForm" onSubmit={submit}>
      <input className="showroomBookingTrap" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="showroomBookingPair">
        <label>First name *<input name="firstName" required maxLength={80} /></label>
        <label>Last name *<input name="lastName" required maxLength={80} /></label>
      </div>
      <div className="showroomBookingPair">
        <label>Email *<input type="email" name="email" required maxLength={160} /></label>
        <label>Phone<input type="tel" name="phone" maxLength={40} /></label>
      </div>
      <div className="showroomBookingPair">
        <label><span><CalendarDays size={17} /> Preferred date *</span><input type="date" name="date" min={minDate} required /></label>
        <label><span><Clock3 size={17} /> Preferred time *</span>
          <select name="time" required defaultValue="">
            <option value="" disabled>Select a time</option>
            {timeOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
      </div>
      <label>What would you like to review?
        <textarea name="notes" rows={5} maxLength={2000} placeholder="Tell us about the materials, finishes or project details you would like to discuss." />
      </label>
      <button className="btn showroomBookingSubmit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Booking your visit" : "Confirm Showroom Visit"} <ArrowUpRight size={15} />
      </button>
      {message && <p className={"showroomBookingStatus " + status} role={status === "error" ? "alert" : "status"} aria-live="polite">{message}</p>}
    </form>
  );
}
