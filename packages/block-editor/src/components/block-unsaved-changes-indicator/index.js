/**
 * WordPress dependencies
 */
import { Fill } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

function UnsavedChangesIndicator() {
	useEffect( () => {
		const parentSelectorBtn = document.querySelector(
			'.block-editor-block-parent-selector'
		);
		const contextualToolBar = document.querySelector(
			'.block-editor-block-contextual-toolbar'
		);

		const displayParentSelectorUnsavedChangesIndicator = () => {
			// add class to the parent selector button to increase it's width and to display the unsaved changes indicator
			parentSelectorBtn?.classList.add( 'parent-block-has-changes' );
			// add class to the contextual toolbar to move it to the right side
			contextualToolBar?.classList.add( 'parent-block-has-changes' );
		};

		const removeParentSelectorUnsavedChangesIndicator = () => {
			// remove classes from the parent selector and contextual toolbar
			parentSelectorBtn?.classList.remove( 'parent-block-has-changes' );
			contextualToolBar?.classList.remove( 'parent-block-has-changes' );
		};

		// check if it is a child block
		if ( parentSelectorBtn ) {
			displayParentSelectorUnsavedChangesIndicator();
		} else {
			removeParentSelectorUnsavedChangesIndicator();
		}

		return () => {
			removeParentSelectorUnsavedChangesIndicator();
		};
	}, [] );

	return <div className="block-unsaved-changes-indicator"></div>;
}

function BlockUnsavedChangesIndicator() {
	return (
		<>
			<Fill name="block-unsaved-changes-indicator">
				<UnsavedChangesIndicator />
			</Fill>
		</>
	);
}

export default BlockUnsavedChangesIndicator;
