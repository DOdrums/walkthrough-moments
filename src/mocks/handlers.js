import { rest } from "msw";

const baseURL = "https://drf-api-dirk.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "b",
        email: "dirkornee@hotmail.com",
        first_name: "Dirk",
        last_name: "Ornee",
        profile_id: 1,
        profile_image:
          "https://res.cloudinary.com/dirkornee/image/upload/v1/media/images/dirkornee_xxz5w4",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
