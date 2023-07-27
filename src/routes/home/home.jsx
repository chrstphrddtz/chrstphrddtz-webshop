
import categories from "../../resources/categories.json";
import Directory from "../../components/directory/directory";

export default function Home() {
  return <Directory categories={categories} />;
}
