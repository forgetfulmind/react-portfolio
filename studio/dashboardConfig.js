export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6078bc925dd167bba0c8032c',
                  title: 'Sanity Studio',
                  name: 'react-portfolio-studio',
                  apiId: 'ab0e80dc-69f9-4e12-996b-70bdbfe3204e'
                },
                {
                  buildHookId: '6078bc92a3cbd6b243e3c82d',
                  title: 'Portfolio Website',
                  name: 'react-portfolio-web',
                  apiId: '4ff542d2-eb20-4520-b1a9-71b8d112f8e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/forgetfulmind/react-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://react-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
