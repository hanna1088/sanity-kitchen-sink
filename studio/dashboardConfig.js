export default {
  widgets: [
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
                  buildHookId: '5fac7c403546b3b037c5be79',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kg9x63s8',
                  apiId: '9a2b2ec6-fbfb-44ef-99b8-4ef0c79ad3b9'
                },
                {
                  buildHookId: '5fac7c4034f0808f8052253b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5e893yrn',
                  apiId: '4d8c35b0-c12d-4b91-addd-2243e5013eca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hanna1088/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5e893yrn.netlify.app', category: 'apps'}
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
