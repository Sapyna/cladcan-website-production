import ShowroomBookingForm from "./ShowroomBookingForm";

export const metadata = {
  title: "Book a Showroom Visit | CladCan",
  description: "Choose a date and time to visit the CladCan showroom in North York.",
};

export default function ShowroomVisitPage() {
  return (
    <main className="showroomBookingPage">
      <section className="showroomBookingHero">
        <div className="wrap showroomBookingHeroInner">
          <p className="showroomBookingEyebrow">CLADCAN SHOWROOM</p>
          <h1>Choose a time to visit.</h1>
          <p>Meet with the CladCan team to review exterior materials, finishes and project requirements at our North York showroom.</p>
        </div>
      </section>
      <section className="showroomBookingSection">
        <div className="wrap showroomBookingGrid">
          <aside className="showroomBookingDetails">
            <p className="showroomBookingEyebrow">VISIT DETAILS</p>
            <h2>Plan your showroom appointment.</h2>
            <p>Select an available weekday and time. After the request is submitted, a confirmation will be sent to your email.</p>
            <div className="showroomBookingInfo">
              <strong>CladCan Building Envelope &amp; Façade Contractors</strong>
              <span>5000 Dufferin St, Unit K</span>
              <span>North York, ON M3H 5T5</span>
              <a href="tel:+18449243030">+1 (844) 924-3030</a>
            </div>
          </aside>
          <ShowroomBookingForm />
        </div>
      </section>
    </main>
  );
}
