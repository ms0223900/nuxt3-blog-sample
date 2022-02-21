import { useQuery } from "h3";
import type { IncomingMessage, ServerResponse } from "http";
import posts from "~~/static/posts";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const postList = posts;
  const query = useQuery(req);
  console.log(query);
  res.statusCode = 200;

  return {
    data: postList,
  };
};
