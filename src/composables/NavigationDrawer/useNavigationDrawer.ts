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
    icon_link: "https://firebasestorage.googleapis.com/v0/b/messangercloud.appspot.com/o/01.jpg?alt=media&token=435f5c47-1f5c-4173-931a-b0790cd49745",
    title: "Eric Leonhard",
    subtitle: "ericleonhard@gmail.com",
  });

  const navList: Array<navListType> = [
    { id: "1", value: "myfiles", title: "Articles", icon: "docs.png" },
    { id: "1", value: "myfiles", title: "My Articles", icon: "foldes.png" },
    {
      id: "2",
      value: "shared",
      title: "Shared with me",
      icon: "date.png",
    },
    { id: "3", value: "starred", title: "Starred", icon: "like.png" },
    { id: "4", value: "trash", title: "Trash", icon: "like.png" },
    { id: "5", value: "settings", title: "Settings", icon: "settings.png" },
    { id: "5", value: "settings", title: "Super Job", icon: "agreement.png" },
  ];

  return {
    object_user_data_template: object_user_data_template,
    navList: navList,
  };
}
