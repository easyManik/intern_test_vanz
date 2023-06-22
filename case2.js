function case2() {
  var comment = [
    {
      commentId: 1,
      commentContent: "Hai",
      replies: [
        {
          commentId: 11,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 111,
              commentContent: "Haai juga hai jugaa",
            },
            {
              commentId: 112,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
        {
          commentId: 12,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 121,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
      ],
    },

    { commentId: 2, commentContent: "Halooo" },
  ];

  let count = -1;
  //   console.log(comment.length);
  //   console.log(comment[0].replies.length);
  //   console.log(comment[0].replies[0].replies.length);
  //   console.log(comment[0].replies[1].replies.length);

  //CARA PERTAMA
  for (let a = 0; a < 10; a++) {
    let jlh =
      comment.length +
      comment[0].replies.length +
      comment[0].replies[0].replies.length +
      comment[0].replies[1].replies.length;
    return jlh;
  }

  //CARA KEDUA
  if (comment.commentId != 0) {
    for (let i = 0; i < comment.length; i++) {
      // count++;
      for (let j = 0; j < comment[0].replies.length; j++) {
        // count++;
        for (let k = j; k <= comment[0].replies[j].replies.length; k++) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log("Total comments: " + case2());
