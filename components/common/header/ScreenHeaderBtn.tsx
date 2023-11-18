import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

interface Props {
  iconUrl: any;
  dimension: number;
  handlePress: () => void;
}

const ScreenHeaderBtn: React.FC<Props> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode="cover" width={20} height={10} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
