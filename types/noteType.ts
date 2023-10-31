export type NoteType = {
    id: string,
    title: string,
    description: string,
    categories: 'study' | 'office' | 'home',
}