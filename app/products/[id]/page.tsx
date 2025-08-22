type Props = {
  params: { id: string };
};

export default async function Product({ params }: Props): Promise<React.JSX.Element> {
  const { id } = params;
  return <div>Products: {id}</div>;
}
