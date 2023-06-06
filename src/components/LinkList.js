import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    links {
        id
        nombre
        edad
        nacionalidad
        estatura
        peso
        club
        posicion
        goles
        asistencias
        imagen
    }
  }
`
;

const LinkList = () => {
  
  const { data } = useQuery(FEED_QUERY);

/*  const linksToRender = [
    {
      id: 'link-id-1',
      nombre: 'Neymar',
      edad: 29,
      nacionalidad: 'Brasil',
      estatura: 175,
      peso: 68,
      club: 'Paris Saint-Germain',
      posicion: 'Delantero',
      goles: 150,
      asistencias: 90,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/paradigmas-a55a8.appspot.com/o/Ney.jpg?alt=media&token=2ac1b910-23f3-46a9-9ec8-5261b5c80eee'
    },
    {
      id: 'link-id-2',
      nombre: 'Kylian Mbappé',
      edad: 22,
      nacionalidad: 'Francia',
      estatura: 178,
      peso: 73,
      club: 'Paris Saint-Germain',
      posicion: 'Delantero',
      goles: 100,
      asistencias: 50,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/paradigmas-a55a8.appspot.com/o/Mbappe.jpg?alt=media&token=6fd053d7-3cab-4f45-9533-f81e8fa6d0c6'
    }
  ];
*/
  return (
    <div>
      {data && (
        <>
      { data.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
        </>
      )}
    </div>
  );
};

export default LinkList;