import * as PropTypes from 'prop-types';
import './button.css';
import { useTribes } from '../source';

/**
 * Primary UI component for user interaction
 */
export const GetTotalTenants = ({ ...props }) => {
	const { TotalTenants } = useTribes();
	const { data: totalTenants } = TotalTenants();

	return (
			<div className="totalTenants">
				Total Tenants: <b>{TotalTenants}</b>
			</div>
	);
};

GetTotalTenants.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	/**
	 * Optional click handler
	 */
};

GetTotalTenants.defaultProps = {};