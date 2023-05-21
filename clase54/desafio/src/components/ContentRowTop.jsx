import ContentRowCenter from './ContentRowCenter.jsx';
import ContentRowMovies from './ContentRowMovies.jsx';
// import GenresInDb from './GenresInDb.jsx';
// import Chart from './Chart';
import Movie from './Movie';

function ContentRowTop(){
    return(
        <>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>
			
				{/*<!-- Content Row Movies-->*/}
				<ContentRowMovies />
				<ContentRowCenter />
				{/* <GenresInDb /> */}
				<Movie />
				{/*<!-- End movies in Data Base -->*/}
			</div>
			{/*<!--End Content Row Top-->*/}
        </>
    )

}
export default ContentRowTop;