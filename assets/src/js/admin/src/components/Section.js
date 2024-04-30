import Icons from './Icons';

function SectionTitle( props ) {
	return (
		<div className="bg-gray-200 px-4 py-5 border-b border-gray-200 sm:px-6">
			<div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
				<div className="ml-4 mt-4">
					<h2 className="text-xl leading-6 font-medium text-gray-900">
						<span>{ Icons.settings }</span>
						{ props.title }
					</h2>
					{ '' !== props.description && (
						<p className="mt-1 text-sm text-gray-500">
							{ props.description }
						</p>
					) }
				</div>
			</div>
		</div>
	);
}

export default SectionTitle;
