import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '../src/Link';

const Title = styled.h1`
  font-size: 18px;
  font-weight: 900;
  color: #111;
`;

function Copyright() {
  return (
    <Typography variant={'body2'} color={'textSecondary'} align={'center'}>
      {'Copyright © '}
      <MuiLink color={'inherit'} href={'https://material-ui.com/'}>
        {'Your Website'}
      </MuiLink>
      <Title>
        {'ABOUT'}
      </Title>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
  return (
    <Container maxWidth={'sm'}>
      <Box my={4}>
        <Typography variant={'h4'} component={'h1'} gutterBottom>
          {'Next.js with TypeScript example'}
        </Typography>
        <Link href={'/'}>{'Go to the main page'}</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
