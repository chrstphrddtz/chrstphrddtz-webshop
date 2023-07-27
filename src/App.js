import CategoryMenu from "./components/category-menu/category-menu";
import categories from "./resources/categories.json"

export default function App() {
  return <CategoryMenu categories={categories}/>;
}
