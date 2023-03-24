import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootGrid = styled(Grid)(() => ({
    height: '100vh',
    overflow: 'hidden',
  }));
  
 export const SidebarGrid = styled(Grid)(() => ({
    background: '#eee',
    height: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    width: 250,
  }));
  
 export const ContentGrid = styled(Grid)(() => ({
    marginLeft: 250,
    padding: 21
  }));