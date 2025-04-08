const cards = document.querySelectorAll(".case-study-card");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const featureList = document.getElementById("featureList");
const closeModalBtn = document.getElementById("closeModal");
const engagementRate = document.getElementById("engagementRate");
const ctr = document.getElementById("ctr");
const caseImg = document.getElementById("caseImg");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.getAttribute("data-title");
    modalDescription.textContent = card.getAttribute("data-objective");
    ctr.innerHTML = `<strong>${card.getAttribute(
      "data-engagement-rate"
    )}% </strong>`;
    engagementRate.innerHTML = `<strong>${card.getAttribute(
      "data-ctr"
    )}% </strong>`;
    caseImg.src = card.getAttribute("data-img-src");
    // Parse the features
    // const features = JSON.parse(card.getAttribute("data-features") || "[]");
    // featureList.innerHTML = "";
    // features.forEach(feature => {
    //   const li = document.createElement("li");
    //   li.textContent = feature;
    //   featureList.appendChild(li);
    // });

    modalOverlay.style.display = "flex";
  });
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});
