import React, { ReactNode } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

type SectionProps = {
  title: ReactNode;
  body: ReactNode;
  className?: string;
};

const Section = ({ title, body, className }: SectionProps) => (
  <section className={className}>
    <Box component="header" fontWeight="fontWeightBold" mb={1}>
      {title}
    </Box>
    <Typography variant="body1">{body}</Typography>
  </section>
);

export default Section;
