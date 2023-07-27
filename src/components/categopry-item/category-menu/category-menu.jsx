import CategoryItem from "../category-item";
import "./category-menu.scss";

import categories from "../../../resources/categories.json";

export default function CategoryMenu() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} categroy={category} />
      ))}
    </div>
  );
}
