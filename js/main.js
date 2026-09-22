// Barber Data Source (Add, remove, or modify barbers here)
const barbersData = [
  {
    id: "sergio-castaneda",
    name: "Sergio Castaneda",
    handle: "https://instagram.com/barber_serg10",
    displayHandle: "@barber_serg10",
    image: "assets/images/barbers/Sergio.jpg",
    booksyUrl: "tel:+15202783729"
  },

  {
    id: "jose-serna",
    name: "Jose Serna",
    handle: "https://instagram.com/fadezbypollo",
    displayHandle: "@fadezbypollo",
    image: "assets/images/barbers/Jose.jpg",
    booksyUrl: "tel:+15203891884"
  },

  {
    id: "felix-salmon",
    name: "Felix Salmon",
    handle: "https://instagram.com/sapoblendz",
    displayHandle: "@sapoblendz",
    image: "assets/images/barbers/Felix.jpg",
    booksyUrl: "http://sapoblendz97.booksy.com/a/"
  },

  {
    id: "edgar-armenta",
    name: 'Edgar Armenta',
    handle: "https://instagram.com/eacutz88",
    displayHandle: "@eacutz88",
    image: "assets/images/barbers/Edgar.jpg",
    booksyUrl: "http://eacutz88.booksy.com/a/"
  },

  {
    id: "ashley-castaneda",
    name: 'Ashley Castaneda',
    handle: "https://instagram.com/ashblendz_",
    displayHandle: "@ashblendz_",
    image: "assets/images/barbers/Ashley.jpg",
    booksyUrl: "http://ashblendz60.booksy.com/a/"
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
        <a href="${barber.handle}" class="barber-handle" target="_blank" rel="noopener noreferrer">
        Instagram: ${barber.displayHandle}
        </a>
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