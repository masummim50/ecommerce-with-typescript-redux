import { IFooter } from "models/types";
import { Link } from "react-router-dom";
interface IMenu {
  menuItems: IFooter[];
}
const FooterColumn = (props: IMenu) => {
  return (
    <div className="col-md-3">
      {props.menuItems.map((item) =>
        item.menuTitle ? (
          <h2 style={{ color: "aqua" }}>{item.menuTitle}</h2>
        ) : (
          <h2></h2>
        )
      )}
      <ul className="list-unstyled">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            {item.name && item.link ? (
              <Link className="text-decoration-none text-white" to={item.link}>
                {item.name}
              </Link>
            ) : (
              false
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
