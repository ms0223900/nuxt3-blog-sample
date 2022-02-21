import { useQuery } from "h3";
import type { IncomingMessage, ServerResponse } from "http";
import { LocaleEnum } from "~~/lang";
import posts from "~~/static/posts";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const postList = posts;
  const query = useQuery(req);
  console.log(query);
  res.statusCode = 200;
  if (![LocaleEnum.en, LocaleEnum.zh].includes(query.locale as any)) {
    return {
      data: postList.zh,
    };
  }
  return {
    data: postList[query.locale as any],
  };

  return {
    data: postList,
  };
};
