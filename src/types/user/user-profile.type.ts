export type UserProfile = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  avatarURL: string;
  websiteURL: string;
  location: string;
  profession: string;
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  articleCount: number;
  followerCount: number;
  followingCount: number;
  confirmed: boolean;
};
