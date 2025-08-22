import { users } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const user = users.find((user) => user.id === parseInt(id));
  return Response.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const Idx = users.findIndex((user) => user.id === parseInt(id));
  if(Idx === -1){
    return new Response(JSON.stringify({error: "user not found"}))
  }
  users.splice(Idx,1);
  return Response.json(users);
}
