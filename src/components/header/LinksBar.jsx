import PropTypes from "prop-types";
function LinksBar({ tag, text }) {
  return (
    <li className="links-navbar"><a href={tag}>{text}</a></li>
  );
}



export default LinksBar;

LinksBar.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string
}

