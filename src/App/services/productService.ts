// в этом файле в будущем добавятся методы для localStorage (добавить в корзину, удалить из корзины)
import { TProduct, TResponse } from '../types/types';

async function getAllProducts(): Promise<TProduct[]> {
  const data: TResponse = await fetch('https://dummyjson.com/products?limit=100')
    .then((res) => res.json())
    .then((list) => list);
  return data.products;
}

async function getAllCategories(): Promise<string[]> {
  const data: string[] = await fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((list) => list);
  return data;
}

async function getProductById(id: string | undefined) {
  let result: Promise<TProduct> | 'not found' = 'not found';
  try {
    const responce = await fetch(`https://dummyjson.com/products/${id}`);
    if (responce.ok) {
      result = (await responce.json()) as Promise<TProduct>;
    }
  } catch {
    console.log('never gonna happen');
  }
  return result;
}

export { getAllProducts, getProductById, getAllCategories };
