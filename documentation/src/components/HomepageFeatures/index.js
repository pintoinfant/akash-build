import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Effortless Containerization',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Akash-build streamlines the process of packaging your applications into Docker containers. It provides a simplified workflow, reducing the complexities of creating Dockerfiles and configuring build settings.
      </>
    ),
  },
  {
    title: 'Compatibility with Pack',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Akash-build seamlessly integrates with Pack, a robust and versatile tool for building OCI-compliant container images. This compatibility ensures that your container images meet industry standards for compatibility and portability.
      </>
    ),
  },
  {
    title: 'Simplified Commands',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Akash-build offers an intuitive and user-friendly command-line interface. The commands are easy to understand and execute, making it accessible to developers and DevOps professionals of all levels of experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
