import React from 'react';
import CardInfoMovies from './CardInfoMovies';


let cardsContent =[
	{	
		id: 1,
		title: "Movies in Data Base",
		borderColor: "primary",
		quantity: 21,
		icon: "fa-film"
	},
	{	
		id: 2,
		title: "Total awards",
		borderColor: "success",
		quantity: 79,
		icon: "fa-award",
	},
	{	
		id:3,
		title: "Actors quantity",
		borderColor: "warning",
		quantity: 21,
		icon: "fa-user",
	}
]


function ContentRowTop(){
    return(
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{cardsContent.map((item, index) => 
						<CardInfoMovies
							key={index}
							id={item.id} 
							title={item.title} 
							borderColor={item.borderColor}
							quantity={item.quantity}
							icon={item.icon}
						/>)
						}
					</div>			
				</div>
    )

}
export default ContentRowTop;