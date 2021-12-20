import React from 'react'
import Movies from './Movies'


let moviesInDataBase =[
	{	
		id: 1,
		title: "Reto al destino",
		qualification: 20,
		awards: 15,
		duration: 120
	},
	{	
		id: 2,
		title: "La caida del halcon negro",
		qualification: 10,
		awards: 18,
		duration: 240,
	}
]

export default function MoviesList() {
    return (
        <div>
            {/*<!-- PRODUCTS LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {moviesInDataBase.map((movie, index) =>
                                    <Movies 
                                    key={movie.index}
                                    id={movie.id}
                                    title={movie.title}
                                    qualification={movie.qualification}
                                    awards={movie.awards}
                                    duration={movie.duration}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
