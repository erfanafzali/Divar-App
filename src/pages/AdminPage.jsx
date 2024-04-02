import CategoryForm from "../components/templates/CategoryForm";
import CategoryList from "../components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="w-full">
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
