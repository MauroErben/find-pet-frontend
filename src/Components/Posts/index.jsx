import React, { useState } from 'react'
import CardPost from '../Card'

export default function Posts () {
    const [post, setPost] = useState([
        {
            id: 1,
            postImage: 'https://s1.eestatic.com/2020/06/30/curiosidades/mascotas/mascotas_501711745_154816138_1706x960.jpg',
            postTitle: 'Busco a Firulais',
            postDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laboriosam sequi, expedita nulla id beatae harum voluptates, repellat, quasi inventore ea dolores in repellendus doloremque animi praesentium saepe? Nemo, repudiandae.',
            postCreatedAt: new Date(),
            postLocation: 'Maipú'
        },

        {
            id: 2,
            postImage: 'https://www.caracteristicas.co/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg',
            postTitle: 'Busco a Lolo',
            postDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laboriosam sequi, expedita nulla id beatae harum voluptates, repellat, quasi inventore ea dolores in repellendus doloremque animi praesentium saepe? Nemo, repudiandae.',
            postCreatedAt: new Date(),
            postLocation: 'Luján de Cuyo'
        },

        {
            id: 3,
            postImage: 'https://estag.fimagenes.com/img/2/2/p/n/2pn_900.jpg',
            postTitle: 'Busco a Rocco',
            postDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laboriosam sequi, expedita nulla id beatae harum voluptates, repellat, quasi inventore ea dolores in repellendus doloremque animi praesentium saepe? Nemo, repudiandae.',
            postCreatedAt: new Date(),
            postLocation: 'Las Heras'
        }
    ])
    return(
        <CardPost postList={post} />
    )
}