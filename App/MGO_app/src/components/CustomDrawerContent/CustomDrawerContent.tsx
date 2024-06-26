import React from 'react';
import HomeScreenIcon from '../../assets/homeicon.svg'; // Adjust the import path
import LogOutIcon from '../../assets/logouticon.svg';
import MyProductsIcon from '../../assets/briefcase.svg';
import MessageIcon from '../../assets/mail.svg';
import ProfileIcon from '../../assets/profile.svg';
import FavouritesIcon from '../../assets/heart.svg';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {RouterKey} from '../../routes/Routes';
import {useAuth} from '../../context/AuthContext';
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const {logout} = useAuth();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={() => <HomeScreenIcon width={25} height={25} />}
        label="Home"
        onPress={() => props.navigation.navigate(RouterKey.HOME_SCREEN)}
      />
      <DrawerItem
        icon={() => <ProfileIcon width={25} height={25} />}
        label="Account"
        onPress={() => {
          props.navigation.navigate(RouterKey.MYPROFILE_SCREEN);
        }}
      />
      <DrawerItem
        icon={() => <MyProductsIcon width={25} height={25} />}
        label="Upload Product"
        onPress={() => {
          props.navigation.navigate(RouterKey.UPLOAD_SCREEN);
        }}
      />
      <DrawerItem
        icon={() => <FavouritesIcon width={25} height={25} />}
        label="Favorites"
        onPress={() => {
          props.navigation.navigate(RouterKey.FAVORITES_SCREEN);
        }}
      />
      <DrawerItem
        icon={() => <MessageIcon width={25} height={25} />}
        label="Message"
        // onPress={() => props.navigation.navigate(RouterKey.CHAT_SCREEN)}
        onPress={() => alert('Sorry this feature is not implemented yet!')}
      />
      <DrawerItem
        icon={() => <LogOutIcon width={25} height={25} />}
        label="Logout"
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
