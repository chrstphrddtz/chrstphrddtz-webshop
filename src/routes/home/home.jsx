import Directory from "../../components/directory/directory";
import categories from "../../resources/categories.json";

export default function Home() {
  return <Directory categories={categories} />;
}
