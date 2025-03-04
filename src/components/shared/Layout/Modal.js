import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({
	title,
	bodyContent,
	footerContent,
	isModalOpen,
	styles,
	closeModal
}) => {
	if (!isModalOpen) return null;

	return (
		<div className={classNames("fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", styles)}>
			<div className="bg-white rounded-lg shadow-lg w-96 p-5">
				<div className="flex justify-between items-center border-b pb-2">
					<h2 className="text-lg font-bold">{title}</h2>
					<button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
				</div>
				<div className="py-4">{bodyContent}</div>
				<div className="flex justify-end space-x-2 border-t pt-2">
					{footerContent || (
						<button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Okay</button>
					)}
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	title: PropTypes.any,
	bodyContent: PropTypes.any,
	footerContent: PropTypes.any,
	isModalOpen: PropTypes.bool,
	styles: PropTypes.any,
	closeModal: PropTypes.func
};

export default Modal;
