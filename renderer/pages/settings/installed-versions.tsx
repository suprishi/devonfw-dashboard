import SpaceAround from '../../modules/shared/hoc/SpaceAround';
import Installations from '../../components/Installations/Installations.contoller';

export default function InstalledVersions(): JSX.Element {
  return (
    <SpaceAround bgColor={'#f4f6f8'}>
      <Installations></Installations>
    </SpaceAround>
  );
}
