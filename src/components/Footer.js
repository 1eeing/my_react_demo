import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <p>
        show: <FilterLink filter={'showAll'}>All</FilterLink>
        {', '}
        <FilterLink filter={'showActive'}>Active</FilterLink>
        {', '}
        <FilterLink filter={'showComplated'}>Complated</FilterLink>
    </p>
);

export default Footer;