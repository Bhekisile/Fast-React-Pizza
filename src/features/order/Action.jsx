import { createOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // https://uibakery.io/regex-library/phone-number
    const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
  
    const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "on",
    };

    const errors = {};
    if(!isValidPhone(order.phone)) errors.phone = 'Please give us your correct phone number. We might need it to contact you.';

    if (Object.keys(errors).length > 0) return errors;

    const newOrder = await createOrder(order);
  
  
    return redirect(`/order/${newOrder.id}`);
  }