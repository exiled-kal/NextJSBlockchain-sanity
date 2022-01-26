import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'axduyrmr',
    database: 'production',
    apiVersion:'2021'
})