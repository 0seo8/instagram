import { client } from '@/service/sanity';

const simplePostProjection = `
  ...,
  "username": author -> username,
  "userImage": author -> image,
  "image": photo,
  "likes": likes[]-> username,
  "text": comments[0].comment,
  "comments": count(comments),
  "id":_id,
  "createdAt": _createdAt
`; // (플래트닝)post.author.username -> post.username 되도록 수정

export async function getFollowingPostsOf(username: string) {
  return client.fetch(
    `
      *[_type == "post" && author->username == "${username}"
       || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
       | order(_createdAt desc){${simplePostProjection}}
     `,
  );
}
