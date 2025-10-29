document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const thankYou = document.getElementById("thankYou");
  const summary = document.getElementById("summary");
  const backBtn = document.getElementById("backBtn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const notes = document.getElementById("notes").value.trim();

    const services = Array.from(
      document.querySelectorAll('input[name="services"]:checked')
    ).map((cb) => cb.value);

    if (services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const messageText =
      `*New Laundry Booking* 👕\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🧺 *Services:* ${services.join(", ")}\n` +
      (notes ? `📍 *Address/Notes:* ${notes}\n` : "") +
      `\nPlease confirm the pickup.`;

    // ✅ Show thank-you page
    form.classList.add("hidden");
    thankYou.classList.remove("hidden");

    // ✅ Fill summary
    summary.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services:</strong> ${services.join(", ")}</p>
      ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
    `;

    // ✅ Open WhatsApp automatically
    const whatsappNumber = "9131842188";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappURL, "_blank");
  });

  // ✅ Go back to booking
  backBtn.addEventListener("click", () => {
    thankYou.classList.add("hidden");
    form.classList.remove("hidden");
    form.reset();
  });
});
