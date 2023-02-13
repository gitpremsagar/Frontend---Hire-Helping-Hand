export default function ServiceDeliveryDate({ num_of_days }) {
  const today = new Date();
  const threeDaysFromToday = new Date(
    today.getTime() + num_of_days * 24 * 60 * 60 * 1000
  );
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const indiaTimeZone = Intl.DateTimeFormat("en-IN", options);
  return (
    <p className="italic">
      Get it done by{" "}
      <span className="font-bold">
        {indiaTimeZone.format(threeDaysFromToday)}
      </span>
    </p>
  );
}
