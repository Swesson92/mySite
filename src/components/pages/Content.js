import React from 'react';
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css'
import '../../App.css';

export default function Products() {

    const items = [
        {
          id: 1,
          header: 'Lorem ipsum',
          description:
            'dolor sit amet, consectetur adipiscing elit.',
          image: '/images/lakes.jpg'
        },
        {
          id: 2,
          header: 'Sed cursus',
          description:
            'in metus quis tempor. Donec at venenatis magna',
          image: '/images/fiske.jpg'
        },
        {
          id: 3,
          header: 'Sed fermentum',
          description:
            'condimentum purus, non sagittis massa faucibus id.',
          image: ' /images/gbg.jpg'
        },
        {
          id: 4,
          header: 'Proin et urna',
          description:
            'vitae neque fermentum fringilla.',
          image: '/images/havet.jpg'
        },
        {
          id: 5,
          header: 'Cras leo velit',
          description:
            'finibus id eros eu,',
          image: '/images/skog.jpg'
        }
      ]


    return (
        <CardView
      items={items}
      activeColor='#000'
      imageHeight='650px'
      imageWidth='800px'
      align-items='center'
    />
    );
}