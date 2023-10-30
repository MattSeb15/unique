import FilledGButton from '../buttons/filledGButton'
import UniqueLogo from '../logos/uniqueLogo'
import { TEXTAPP } from '../../constants/textApp'
import AlternativeButton from '../buttons/alternativeButton'
import UniversitiesCard from '../cards/universitiesCard'

function Main() {
	return (
		<>
			<main className='flex flex-1 flex-col justify-center items-center pt-[72px] body-bg'>
				<div className='flex flex-row  justify-between mx-5'>
					<div className='flex flex-col items-center justify-center'>
						<h1 className='text-4xl lg:text-5xl mt-20 xl:mt-0 font-extrabold text-white text-center max-w-[90%] lg:max-w-[75%]'>{TEXTAPP.slogan}</h1>

						<p className='text-sm lg:text-xl text-center text-slate-400 mt-6 max-w-[80%] lg:max-w-[50%]'>{TEXTAPP.slSubtitle}</p>
						<div className='flex flex-row mt-5'>
							<FilledGButton text='Empezar' />
							<AlternativeButton text='Explorar cursos' />
						</div>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<UniqueLogo className='hidden xl:inline-flex  lg:h-auto' />
					</div>
				</div>
				<UniqueLogo className='inline-flex xl:hidden w-80 lg:h-auto' />
				
				<UniversitiesCard />
			</main>
		</>
	)
}

export default Main
