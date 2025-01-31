export const GET_PINNED_REPOSITORIES = `
    query {
        viewer {
            pinnedItems(first: 10, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                        stargazerCount
                    }
                }
            }
        }
    }
`;
