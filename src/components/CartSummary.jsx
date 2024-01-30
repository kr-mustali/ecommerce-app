/* eslint-disable react/prop-types */
export default function CartSummary({ cart }) {
  const calculateTotal = () => {
    const totalAmount = cart.reduce((accumulator, item) => {
      return accumulator + item.total;
    }, 0);

    return totalAmount;
  };

  const totalAmount = calculateTotal();

  return <div>Cart Total: ${totalAmount}</div>;
}
