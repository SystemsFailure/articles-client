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
    icon_link:
      "https://firebasestorage.googleapis.com/v0/b/messangercloud.appspot.com/o/01.jpg?alt=media&token=435f5c47-1f5c-4173-931a-b0790cd49745",
    title: "Eric Leonhard",
    subtitle: "ericleonhard@gmail.com",
  });

  const navList: Array<navListType> = [
    { id: "1", value: "1", title: "Articles", icon: "documents.png" },
    { id: "2", value: "2", title: "Archives", icon: "archive.png" },
    { id: "3", value: "3", title: "Favorites", icon: "favorites.png" },
    { id: "4", value: "4", title: "Trash", icon: "trash.png" },
    { id: "5", value: "5", title: "Settings", icon: "settings.png" },
    { id: "6", value: "6", title: "Agreements", icon: "protect.png" },
  ];

  return {
    object_user_data_template: object_user_data_template,
    navList: navList,
  };
}
