export const submitOrder = async (orderData) => {
  const formData = new URLSearchParams(orderData).toString();

  const URL =
    "https://script.google.com/macros/s/AKfycbxOUO4Osq-9lggKoQaypgeEjv-VBAJtRQj9S03djxlJCnfsJsZtpK6trM3rpl0j-mz4/exec";

  const response = await fetch(URL, {
    method: "POST",
    body: formData,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return response.text();
};
