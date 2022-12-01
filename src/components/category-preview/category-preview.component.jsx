import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
const CategoryPreview = ({ title, producs }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {producs
          .filter((_, inx) => inx < 4)
          .map((product) => (
            <ProductCard product={product} id={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
