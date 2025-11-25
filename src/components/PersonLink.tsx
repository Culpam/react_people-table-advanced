import { NavLink } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person;
  search?: string;
};

export const PersonLink: React.FC<Props> = ({ person, search = '' }) => {
  const className = person.sex === 'f' ? 'has-text-danger' : '';

  return (
    <NavLink to={`/people/${person.slug}?${search}`} className={className}>
      {person.name}
    </NavLink>
  );
};
