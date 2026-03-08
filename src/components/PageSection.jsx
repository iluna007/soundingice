import PropTypes from "prop-types";
import { PAGE_CONTENT_STYLE } from "../constants";

const PageSection = ({ children, className = "" }) => (
	<div className={`mt-6 ${className}`.trim()} style={PAGE_CONTENT_STYLE}>
		{children}
	</div>
);

PageSection.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default PageSection;
