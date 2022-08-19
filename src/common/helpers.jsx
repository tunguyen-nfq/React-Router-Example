import { useLocation, NavLink } from 'react-router-dom';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();

  return (
    <NavLink
      to={to + location.search}
      style={({ isActive }) => {
        return {
          display: 'block',
          margin: '1rem 0',
          color: isActive ? 'red' : '',
        };
      }}
      {...props}
    />
  );
}

export { QueryNavLink };
