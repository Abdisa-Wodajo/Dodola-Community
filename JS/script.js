// Activate Bootstrap tooltips if needed
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map(function (el) {
  return new bootstrap.Tooltip(el);
});
