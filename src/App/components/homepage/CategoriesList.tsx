import { NewTypeCategory, SetURLSearchParams, TProduct, TQueryParams } from '../../types/types';
import countProducts from '../../utils/countProducts';
import listStyles from './listStyles.module.scss';

type TProps = {
  products: TProduct[];
  categories: NewTypeCategory[];
  query: string[];
  setData: SetURLSearchParams;
  data: URLSearchParams;
  wholeCount: { [key: string]: number };
};

function CategoriesList({ products, categories, query, setData, data, wholeCount }: TProps) {
  const handleSelect = (item: string) => {
    const params: TQueryParams = {
      category: [],
      brand: [],
      search: '',
      sort: '',
      price: '',
      stock: '',
      size: '',
    };
    params.search = data.get('search') || '';
    params.price = data.get('price') || '';
    params.sort = data.get('sort') || '';
    params.category = query.includes(item) ? query.filter((i) => i !== item) : [...query, item];
    params.brand = data.getAll('brand');
    params.stock = data.get('stock') || '';
    params.size = data.get('size') || 'big';
    setData(params);
  };
  const currentCount = countProducts(products, 'category');

  return (
    <ul className={listStyles.list}>
      {categories
        .sort()
        .sort((a, b) => {
          if (currentCount[a.slug] > 0 && currentCount[b.slug] === undefined) return -1;
          return 0;
        })
        .map((category) => (
          <div className={listStyles.list__item} key={category.slug}>
            <input
              className={listStyles.item__checkbox}
              type="checkbox"
              id={category.slug}
              name={category.slug}
              value={category.slug}
              checked={query.includes(category.slug)}
              onChange={() => handleSelect(category.slug)}
            />
            <label
              className={`${listStyles.item__label} ${!currentCount[category.slug] ? listStyles.text_greyed : ''}`}
              htmlFor={category.slug}
            >
              {category.slug}
              <span className={listStyles.item__labelspan}>
                ({currentCount[category.slug] ? currentCount[category.slug] : 0}/{wholeCount[category.slug]})
              </span>
            </label>
          </div>
        ))}
    </ul>
  );
}

export default CategoriesList;
