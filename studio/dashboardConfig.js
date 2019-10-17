export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5da827213aff185e9c19a7df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-au2v1aou',
                  apiId: 'eb26365e-60d3-42d8-bc40-1aeb0e435bed'
                },
                {
                  buildHookId: '5da827213aff185fe219a7de',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jh85y5is',
                  apiId: '6029a76e-8e59-4218-add2-d7fb1ceee7da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thorchr/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jh85y5is.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
