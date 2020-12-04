module.exports = {
  title: 'CJIS Tables',
  tagline: 'Code tables maintained by ISAB',
  url: 'https://docs.codes.lacounty-isab.org',
  baseUrl: '/',
  favicon: 'img/favicon-96x96.png',
  organizationName: 'lacounty-isab', // Usually your GitHub org/user name.
  projectName: 'cjisdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CJIS Tables',
      logo: {
        alt: 'Site Logo',
        src: 'img/LAC-seal.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lacounty-isab/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'County Sites',
          items: [
            {
              label: 'ISAB',
              to: 'http://ccjcc.lacounty.gov/Subcommittees-Task-Forces/Information-Systems-Advisory-Board-ISAB',
            },
            {
              label: 'CCJCC',
              to: 'http://ccjcc.lacounty.gov/',
            },
            {
              label: 'BOS',
              to: 'http://bos.lacounty.gov/'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lacounty-isab'
            },
            {
              label: 'DockerHub',
              href: 'https://hub.docker.com/u/lacounty'
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/org/isab'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} County of Los Angeles, ISAB. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
