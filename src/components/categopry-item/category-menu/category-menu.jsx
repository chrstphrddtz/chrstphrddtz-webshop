import CategoryItem from "../category-item";
import "./category-menu.scss";

export default function CategoryMenu({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} categroy={category} />
      ))}
    </div>
  );
}
