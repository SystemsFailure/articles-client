import { ref, Ref } from "vue";

export type navListType = {
  id: string;
  value: string;
  title: string;
  icon: string;
};

export interface UserDTO {
  icon_link: string;
  title: string;
  subtitle: string;
}

export function useNavigationDrawer() {
  const object_user_data_template: Ref<UserDTO> = ref({
    icon_link: "https://randomuser.me/api/portraits/women/85.jpg",
    title: "Sandra Adams",
    subtitle: "sandra_a23@gmail.com",
  });

  const navList: Array<navListType> = [
    { id: "1", value: "myfiles", title: "Articles", icon: "docs.png" },
    { id: "1", value: "myfiles", title: "My Articles", icon: "" },
    {
      id: "2",
      value: "shared",
      title: "Shared with me",
      icon: "mdi-account-multiple",
    },
    { id: "3", value: "starred", title: "Starred", icon: "mdi-star" },
    { id: "4", value: "trash", title: "Trash", icon: "mdi-trash" },
    { id: "5", value: "settings", title: "Settings", icon: "mdi-cog" },
    { id: "5", value: "settings", title: "Super Job", icon: "mdi-cog" },
  ];

  return {
    object_user_data_template: object_user_data_template,
    navList: navList,
  };
}
