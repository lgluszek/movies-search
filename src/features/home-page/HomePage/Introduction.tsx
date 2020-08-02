import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

type IntroductionProps = {
  className?: string;
};

const Introduction: FC<IntroductionProps> = ({ className }) => (
  <section className={className}>
    <header>
      <Typography gutterBottom variant="h5" component="h1">
        Introduction
      </Typography>
    </header>
    <main>
      <Typography>
        It's a non-commercial application, just for learning purposes. It uses{' '}
        <Link href="http://www.omdbapi.com/" target="_blank" rel="noreferrer">
          http://www.omdbapi.com/
        </Link>
        . Not all features are implemented. To find list of things that are
        planned to add, please go to the{' '}
        <Link
          href="https://github.com/lgluszek"
          target="_blank"
          rel="noreferrer"
        >
          readme
        </Link>
        .
      </Typography>
    </main>
  </section>
);

export default Introduction;
