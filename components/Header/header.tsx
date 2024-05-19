'use client';

import { useState } from 'react';
import { Group, Burger, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About me' },
  { link: '/services', label: 'Services' },
  { link: '/skills', label: 'Skills' },
  { link: '/contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Title>Arsalan</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </div>
    </header>
  );
}
