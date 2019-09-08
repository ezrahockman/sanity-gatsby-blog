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
                  buildHookId: '5d74956fc33b02afd2deb914',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t2cg81vp',
                  apiId: '4e4ca616-4ecf-4d01-a1e4-25b370fa03df'
                },
                {
                  buildHookId: '5d74956f55efc0e78ea77264',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wisq2oaa',
                  apiId: '1a163cd6-f8ef-42c5-9ace-82932805bed3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ezrahockman/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wisq2oaa.netlify.com', category: 'apps'}
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
