document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".progress-ring__circle");
  const percents = document.querySelectorAll(".percent");

  circles.forEach((circle, index) => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    const percentText = percents[index].innerText.replace("%", "");
    const progress = percentText / 100;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
      circle.style.strokeDashoffset = circumference - progress * circumference;
    }, 300);
  });
});