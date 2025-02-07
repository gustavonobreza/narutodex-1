import Head from 'next/head';
import React from 'react';
import api from 'services/api';

import Description from 'components/Description';
import { Container } from '../../styles/Description';

import Header from '../../components/Header';

function characters({ character }) {
  return (
    <Container>
      <Head>
        <title>Personagem | {character.name}</title>
      </Head>

      <img className="background" src={`${process.env.api}character/${character.id}/image`} alt="" />

      <Header showSwitch={false} />

      <Description data={character} showOne isJutsu={false} />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`character/${params.id}`);

  return {
    props: {
      character: data.data,
    },
  };
}

export default characters;
