import React from 'react';
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css'
import '../../App.css';

export default function Products() {

    const items = [
        {
          id: 1,
          header: 'Dalsland',
          description:
            'Drönarbild från toppen Baljåsen, Dalsland',
          image: '/images/lakes.jpg'
        },
        {
          id: 2,
          header: 'Random',
          description:
            'in metus quis tempor. Donec at venenatis magna',
          image: '/images/fiske.jpg'
        },
        {
          id: 3,
          header: 'Göteborg',
          description:
            'Utsikt över västa Göteborg',
          image: ' /images/gbg.jpg'
        },
        {
          id: 4,
          header: 'Amundön',
          description:
            'Utanför Göteborg',
          image: '/images/havet.jpg'
        },
        {
          id: 5,
          header: 'Skog',
          description:
            'fin skog hiihihihho',
          image: '/images/skog.jpg'
        }
      ]


    return (
        <CardView
      items={items}
      activeColor='#000'
      imageHeight='550px'
      imageWidth='650px'
      align-items='center'
    />
    );
}