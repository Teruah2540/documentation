module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started', 
      items: [
        'audience',
        'entities',
        'execution-context',
        'roles',
        'users',
        'versioning',
        'workflows',
      ],
    },
    {
      type: 'category',
      label: 'Actions',
      items: [
        'faq',
        'running-examples',
        'actions/apply-tokens',
        'actions/execute-javascript-server-side',
        'actions/execute-token',
        'actions/generate-pdf',
        'actions/grant-user-role',
        'actions/inject-data',
        'actions/load-user',
        'actions/load-users-from-sql',
        'actions/merge-pdf',
        'actions/overlay-pdf',
        'actions/revoke-user-role',
        'actions/run-sql',
        'actions/sanitize-html',
        'actions/send-email',
        'actions/server-request',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: 'category',
          label: 'Important Notes',
          items: [
            'modules/important-notes/secure-input',
          ],
        }
      ],
      }
  ]
};