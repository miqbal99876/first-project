import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const TABS = [
  { id: 'all_posts', label: 'All Posts',images:['https://images.unsplash.com/photo-1644984875406-1d3d8bc80530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmV2ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'] },
  { id: 'mention', label: 'Mention',images:['https://plus.unsplash.com/premium_photo-1674086619163-54bd6379f538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cml2ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60','https://media.istockphoto.com/id/1389745382/photo/little-girl-doing-fathers-hair.jpg?b=1&s=170667a&w=0&k=20&c=zutEaiJSIi00IAtnDb7BO_gdCFwl7LwxOoFKXcS7gHU='] },
  
];

const AllPost = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0].id);

  const handleTabPress = (tabId) => {
    setSelectedTab(tabId);
  }

  return (
    <View>
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity 
            key={tab.id}
            style={[styles.tabButton, selectedTab === tab.id && styles.activeTabButton]}
            onPress={() => handleTabPress(tab.id)}
          >
            <Text style={[styles.tabText, selectedTab === tab.id && styles.activeTabText]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.imageContainer}>
        {TABS.find(tab => tab.id === selectedTab).images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   
   
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#57a693',
  },
  tabText: {
    fontSize: 18,
    color:'#efa917'
  },
  activeTabText: {
    color: '#57a693',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },

});

export default AllPost;






