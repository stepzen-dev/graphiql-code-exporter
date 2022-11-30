export default function commentFactory(
  commentsEnabled: boolean,
  comments: Record<string, any>,
) {
  return (id: string) => (commentsEnabled ? '// ' + comments[id] : '');
}
