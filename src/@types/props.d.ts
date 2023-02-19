type PropsReddits = {
    id: string;
    subreddit_id: string;
    score: number;
    author: string;
    title: string;
    num_comments: number;
    created_utc: number;
    url: string;
    permalink: string;
}

type PropsSubReddits = {
    data: {
      children: {
        data: PropsReddits
      }[]
    }
}

type PropsChildrenReddits = {
  data: PropsReddits
}[]

type PropsSelectFilter = "new"|"top"|"controversial"|"hot";