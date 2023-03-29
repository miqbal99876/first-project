import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
import { subCategories } from "../../constants/food";
import { colur } from "../../../config/colors";

  
  const Categories = ({ onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handlePress = (id) => {
      setActiveCategoryId(id);
      onChange(id);
    };
  
    return (
      <FlatList
        horizontal={true}
        data={subCategories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{ marginRight: 10 * 2, alignItems: "center" }}
          >
            <Text
              style={[
                { color: colur.secondary, fontSize: 10 * 2 },
                activeCategoryId === item.id && { color: colur.primary },
              ]}
            >
              {item.name}
            </Text>
            {activeCategoryId === item.id && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: colur.primary,
                  borderRadius: 10 / 2,
                  marginTop: 10 / 2,
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default Categories;
  
  const styles = StyleSheet.create({});