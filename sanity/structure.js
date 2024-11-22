// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Gestionale Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post'].includes(item.getId()),
      ),
    ])
