export function firstLetterToUpper(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function shortVersionText(text) {
  return text.split(" ").slice(0, 24).join(" ") + "...";
}

export function dateFormatter(date) {
  const result = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  return result;
}
