import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const params = useParams();
  return (
    <>
      <h3>The product with id {params.productId}</h3>
    </>
  );
}
