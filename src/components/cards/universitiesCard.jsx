function UniversitiesCard() {
	return (
		<div className='w-[80%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700'>
			<div
				className='p-4 bg-white rounded-lg md:p-8 dark:bg-gray-900'
				id='stats'
				role='tabpanel'
				aria-labelledby='stats-tab'>
				<div className='flex flex-col items-center justify-center  text-slate-400 mt-2 '>
					NUESTRA COMUNIDAD
				</div>
				<dl className='grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8'>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>73M+</dt>
						<dd className='text-gray-500 dark:text-gray-400'>Developers</dd>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>100M+</dt>
						<dd className='text-gray-500 dark:text-gray-400'>
							Public repositories
						</dd>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>1000s</dt>
						<dd className='text-gray-500 dark:text-gray-400'>
							Open source projects
						</dd>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>1B+</dt>
						<dd className='text-gray-500 dark:text-gray-400'>Contributors</dd>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>90+</dt>
						<dd className='text-gray-500 dark:text-gray-400'>
							Top Forbes companies
						</dd>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<dt className='mb-2 text-3xl font-extrabold'>4M+</dt>
						<dd className='text-gray-500 dark:text-gray-400'>Organizations</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}

export default UniversitiesCard
