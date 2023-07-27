import CategoryItem from "../category-item/category-item";
import "./directory.scss";

export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} categroy={category} />
      ))}
    </div>
  );
}
