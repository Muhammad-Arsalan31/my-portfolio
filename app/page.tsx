import { Box, Title } from '@mantine/core';
import { HeroBullets } from '@/components/Hero/hero';

export default function HomePage() {
  return (
    <>
      <HeroBullets />
      <Section title="About" />
      <Section title="Experience" />
      <Section title="Projects" />
      <Section title="Skills" />
      <Section title="Contact me" />
    </>
  );
}

function Section({ title }: { title: string }) {
  return (
    <Box h="100vh" component="section" id={title.toLowerCase()}>
      <Title ta="center">{title}</Title>
    </Box>
  );
}
