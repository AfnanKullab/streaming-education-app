import "./style.css";

export const H2 = (props) => {
  const { children } = props;
  return <h2 className="Heading2">{children}</h2>;
};

export const H6 = (props) => {
  const { children } = props;
  return <h6 className="Heading6">{children}</h6>;
};

export const P = (props) => {
  const { children } = props;
  return <p className="paragraph">{children}</p>;
};
