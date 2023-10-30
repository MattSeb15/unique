import UniqueSvgPath from '../logos/uniqueSvgPath'
import UniqueText from '../logos/uniqueText'

function Header() {
	return (
		<header className='fixed w-full header-bg'>
			<nav
				className=' flex items-center justify-between p-2 lg:px-8'
				aria-label='Global'>
				<div className='flex lg:flex-1 items-center'>
					<a
						href='#'
						className=''>
						<span className='sr-only'>Unique</span>
						<UniqueSvgPath
							width='60px'
							height='60px'
						/>
					</a>
					<UniqueText
						width='60px'
						height='50px'
					/>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Preguntas
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Cursos
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Marketplace
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Unique
					</a>
				</div>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Log in <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
