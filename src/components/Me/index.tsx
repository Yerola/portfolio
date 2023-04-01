import type { FunctionComponent } from 'react';
import { StyledPhoto } from './styles';
import myphoto from '../../assets/fotomia.jpg';

const Me: FunctionComponent = () => (
  <StyledPhoto
    src={myphoto}
    alt="Yesica Romina Lato"
    aria-hidden="true"
  />
);

export default Me;
