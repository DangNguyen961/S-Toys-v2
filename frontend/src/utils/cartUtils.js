export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Tính tiền
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  // Phí ship (giá trị > 100 thì free ship)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
  // Phí có thuế (15%)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
  // Tổng tiền
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
};
