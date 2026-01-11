export default function groceriesList() {
  const products = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5}
  ]

  const productMap = new Map(
    products.map(({ name, quantity }) => [name, quantity])
  );

  return productMap
}