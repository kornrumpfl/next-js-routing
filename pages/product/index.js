import GridList from "../../components/GridList";
import Link from "next/link";
import Head from "next/head";
import { getAllProducts } from "../../services/productServices";

export async function getServerSideProps() {
  const products = await getAllProducts();
  return {
    props: { products },
  };
}

export default function Product({ products }) {
  return (
    <>
      <Head>
        <title>All Products</title>
      </Head>
      <h1>Products</h1>
      <p>List of all products</p>
      <GridList>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </GridList>
    </>
  );
}
