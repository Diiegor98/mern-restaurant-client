function formattedDate(date) {
  const day = date.getDate().toString().padStart(2, "0"); // Asegura 2 dígitos
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Meses van de 0-11
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export default formattedDate;
