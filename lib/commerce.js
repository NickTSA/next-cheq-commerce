import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK(process.env.CHEC_PUBLIC_API_KEY);

async function getCart() {
  try {
    const cart = await commerce.cart.retrieve();
    console.log(cart);
  } catch (e) {
    console.log(e);
  }
}

getCart();

export default commerce;
