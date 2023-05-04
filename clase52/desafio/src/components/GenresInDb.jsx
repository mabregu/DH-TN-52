import {Component} from 'react';
import Genre from './Genre';

class GenresInDb extends Component {
    constructor(){
        super()
        this.state ={
            genresList : []
        }
    }
    // componentDidMount es un método del ciclo de vida de los componentes de React que se ejecuta automáticamente después de que el componente se haya montado en el DOM (Document Object Model).
    componentDidMount() {
        fetch('http://localhost:3031/api/genres')
            .then(respuesta => respuesta.json())
            .then(genres => this.setState({ genresList: genres.data }))
            .catch(error => console.log(error))
        ;
    }
    
    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }
    render() {
        return(
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4 " >
                    <div className="card-header py-3">
                        <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Genres in Data Base</h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div  className="row">
                            {
                                // console.log(this.state.genresList[0])
                                this.state.genresList.map((genre,index)=>{
                                    return  <Genre {...genre}  key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GenresInDb;