// Barber Data Source (Add, remove, or modify barbers here)
const barbersData = [
  {
    id: "sergio-castaneda",
    name: "Sergio Castaneda",
    handle: "@barber_serg10",
    image: "assets/images/barbers/Sergio.jpg",
    booksyUrl: "https://booksy.com"
  },

  {
    id: "jose-serna",
    name: "Jose Serna",
    handle: "@fadezbypollo",
    image: "assets/images/barbers/Jose.jpg",
    booksyUrl: "https://booksy.com"
  },

  {
    id: "felix-salmon",
    name: "Felix Salmon",
    handle: "@sapoblendz",
    image: "assets/images/barbers/Felix.jpg",
    booksyUrl: "https://booksy.com"
  },

  {
    id: "edgar-armenta",
    name: 'Edgar Armenta',
    handle: "",
    image: "assets/images/barbers/Edgar.jpg",
    booksyUrl: "https://booksy.com"
  }
];

// Render Function
function renderBarbers(barbers) {
  const container = document.getElementById("barbers-container");
  if (!container) return;

  if (!barbers || barbers.length === 0) {
    container.innerHTML = `<p class="no-barbers">No barbers available at this time. Check back soon!</p>`;
    return;
  }

  container.innerHTML = barbers
    .map(
      (barber) => `
    <article class="barber-card" id="barber-${barber.id}">
      <div class="barber-card-media">
        <img 
          src="${barber.image}" 
          alt="${barber.name} - Barber" 
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/placeholder.jpg';"
        >
      </div>

      <div class="barber-card-content">
        <div class="card-bg-hex"></div>
        <h2>${barber.name}</h2>
        <p class="instagram-handle">IG: ${barber.handle}</p>
        <a 
          href="${barber.booksyUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="book-btn"
        >
          Book Appointment
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

// Execute on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderBarbers(barbersData);
});