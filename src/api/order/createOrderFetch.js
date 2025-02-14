import formattedDate from "../utils/dateFormater";

export const createOrderFetch = async (cartItems, totalPrice, user) => {
  //Data viene desde finalizar la compra
  try {
    const url = "http://localhost:3977/api/v1/order";

    const date = formattedDate(new Date());

    const newData = {
      menu: cartItems,
      user: user.name,
      price: totalPrice,
      date: date,
      status: false,
    };

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData), //Mandamos la data en formato JSON
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;
    console.log(result);

    return result;
  } catch (error) {
    throw error;
  }
};
