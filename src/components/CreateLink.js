import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!
    $edad: Int!
    $nacionalidad: String!
    $estatura: Int!
    $peso: Int!
    $club: String!
    $posicion: String!
    $goles: Int!
    $asistencias: Int!
    $imagen: String!
  ) {
    createLink(nombre: $nombre, edad: $edad, nacionalidad: $nacionalidad, estatura: $estatura, peso: $peso, club: $club,
        posicion: $posicion, goles: $goles, asistencias: $asistencias, imagen: $imagen) {
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
`;




const CreateLink = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: '',
    edad: '',
    nacionalidad: '',
    estatura: '',
    peso: '',
    club: '',
    posicion: '',
    goles: '',
    asistencias: '',
    imagen: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      nombre: formState.nombre,
      edad: formState.edad,
      nacionalidad: formState.nacionalidad,
      estatura: formState.estatura,
      peso: formState.peso,
      club: formState.club,
      posicion: formState.posicion,
      goles: formState.goles,
      asistencias: formState.asistencias,
      imagen: formState.imagen
    },
    onCompleted: () => navigate('/')
  });
  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre"
          />
          <input
            className="mb2"
            value={formState.edad}
            onChange={(e) =>
              setFormState({
                ...formState,
                edad: e.target.value
              })
            }
            type="text"
            placeholder="Edad"
          />
          <input
            className="mb2"
            value={formState.nacionalidad}
            onChange={(e) =>
              setFormState({
                ...formState,
                nacionalidad: e.target.value
              })
            }
            type="text"
            placeholder="Nacionalidad"
          />
          <input
            className="mb2"
            value={formState.estatura}
            onChange={(e) =>
              setFormState({
                ...formState,
                estatura: e.target.value
              })
            }
            type="text"
            placeholder="Estatura"
          />
          <input
            className="mb2"
            value={formState.peso}
            onChange={(e) =>
              setFormState({
                ...formState,
                peso: e.target.value
              })
            }
            type="text"
            placeholder="Peso"
          />
          <input
            className="mb2"
            value={formState.club}
            onChange={(e) =>
              setFormState({
                ...formState,
                club: e.target.value
              })
            }
            type="text"
            placeholder="Club"
          />
          <input
            className="mb2"
            value={formState.posicion}
            onChange={(e) =>
              setFormState({
                ...formState,
                posicion: e.target.value
              })
            }
            type="text"
            placeholder="Posición"
          />
          <input
            className="mb2"
            value={formState.goles}
            onChange={(e) =>
              setFormState({
                ...formState,
                goles: e.target.value
              })
            }
            type="text"
            placeholder="Goles"
          />
          <input
            className="mb2"
            value={formState.asistencias}
            onChange={(e) =>
              setFormState({
                ...formState,
                asistencias: e.target.value
              })
            }
            type="text"
            placeholder="Asistencias"
          />
          <input
            className="mb2"
            value={formState.imagen}
            onChange={(e) =>
              setFormState({
                ...formState,
                imagen: e.target.value
              })
            }
            type="text"
            placeholder="URL de la imagen"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;