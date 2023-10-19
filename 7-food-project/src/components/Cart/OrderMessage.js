export default function OrderMessage({ isOrderSubitted, isOrderProcessing }) {
  if (isOrderProcessing) {
    return <p>Order Processing...</p>;
  } else if (isOrderSubitted) {
    return <p>Order Submitted!</p>;
  }
}
