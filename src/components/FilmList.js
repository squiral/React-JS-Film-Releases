import React, {Component, Fragment} from 'react'
import Film from './Film.js'


class FilmList extends Component {
    render() {

        const filmComponents = this.props.films.map(filmData => {
            return (
                <Film 
                id={filmData.id}
                name={filmData.name}
                url={filmData.url}/>
            )
        })


        return (
            <Fragment>
                <ul>
                    {filmComponents}
                </ul>
            </Fragment>
        )
    }

}

export default FilmList