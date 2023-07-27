import CategoryMenu from "./components/categopry-item/category-menu/category-menu";
import categories from "./resources/categories.json"

export default function App() {
  return <CategoryMenu categories={categories}/>;
}
