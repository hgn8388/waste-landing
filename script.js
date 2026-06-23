const form = document.querySelector(".request-form");
const slider = document.querySelector(".slider-range");
const afterImage = document.querySelector(".before-after-slider .after-image");
const afterLabel = document.querySelector(".slider-controls span:last-child");

function updateSlider(value) {
  if (afterImage) {
    afterImage.style.width = `${value}%`;
  }
  if (afterLabel) {
    afterLabel.setAttribute("aria-valuenow", value);
  }
}

slider?.addEventListener("input", (event) => {
  updateSlider(event.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  updateSlider(slider?.value || 50);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const lines = [
    "폐기물 수거 견적 문의드립니다.",
    data.get("name") ? `이름: ${data.get("name")}` : "",
    data.get("phone") ? `연락처: ${data.get("phone")}` : "",
    data.get("area") ? `지역: ${data.get("area")}` : "",
    data.get("type") ? `폐기물 종류: ${data.get("type")}` : "",
    data.get("memo") ? `내용: ${data.get("memo")}` : "",
    "사진은 문자 또는 카카오톡으로 보내겠습니다."
  ].filter(Boolean);
  window.location.href = `sms:01083884081?body=${encodeURIComponent(lines.join("\n"))}`;
});