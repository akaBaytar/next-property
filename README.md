# Next Property

> Next Property, where homeowners can list their properties for rent and potential tenants can explore the available options.

## Live Demo

- You can access the live demo via [Vercel](https://burakbilgili-nextproperty.vercel.app).

## Screen

[<img src="/public/screen.png" />](https://burakbilgili-nextproperty.vercel.app)

## Features

**Here are some of the current features that Next Property has:**

- [x] User authentication with Clerk
- [x] User authorization
- [x] Route protection
- [x] User profile
- [x] Internal messages with 'unread' notifications
- [x] Property listing CRUD
- [x] Property image upload
- [x] Property search
- [x] Property bookmarking
- [x] Property sharing to social media
- [x] State management
- [x] Responsive design (Tailwind)
- [x] Custom 404 page
- [x] Next.js Actions

**Next Property uses the following technologies:**

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Share](https://www.npmjs.com/package/react-share)

## Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/en) version 20 or higher
- Sign up and create a new project at [MongoDB](https://www.mongodb.com/cloud/atlas/register)
- Sign up and create a new application at [Clerk](https://dashboard.clerk.com/sign-up)
- Sign up and create a new environment at [Cloudinary](https://cloudinary.com/users/register_free)



#### `.env` File

Create `.env` file and fill in the following environment variables:

```
NEXT_PUBLIC_DOMAIN=http://localhost:3000  (change url after deployment)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=[MONGODB_DATABASE_URL]

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[YOUR_CLERK_KEY]
CLERK_SECRET_KEY=[YOUR_CLERK_SECRET]
WEBHOOK_SECRET=[WEBHOOK_SECRET_FOR_CLERK]

CLOUDINARY_CLOUD_NAME=[YOUR_CLOUDINARY_CLOUD_NAME]
CLOUDINARY_API_KEY=[YOUR_CLOUDINARY_API_KEY]
CLOUDINARY_API_SECRET=[YOUR_CLOUDINARY_API_SECRET]
```

#### Install Dependencies

```bash
npm install
```

#### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details