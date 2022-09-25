import React from 'react';
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  return (
    <AppBar color={'transparent'} position={'static'}>
      <Container>
        <Toolbar>
          <Typography
            variant={'h6'}
            onClick={() => navigate('/')}
            sx={{
              flex: 1,
              color: 'gold',
              fontFamily: 'Montserrat',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Crypto Hunter
          </Typography>

          <Select
            variant={'outlined'}
            style={{ width: 100, height: 40, marginLeft: 15 }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value as string)}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
