import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons';

const DiscoverPost = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImages post={post} />
      {/*<View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <PostFooter post={post} />
          <PostLikes post={post} />
          <PostCaption post={post} />
          <PostCommentSection post={post} />
          <PostComment post={post} />
        </View> */}
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.containerPost}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, }}>
      <Image style={styles.story} source={{ uri: post.profile_picture }} />
      <Text style={styles.storyText}>
        {post.user}
      </Text>
      <TouchableOpacity style={styles.followIcon}>
        <Ionicons name='add' size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  </View>
);

const PostImages = ({ post }) => (
  <ScrollView horizontal={true} style={styles.postImagesContainer}>
    <View style={{gap:20, flexDirection:'row'}}>
    <View style={styles.containerImg}>
        <Image style={styles.postImageImg} source={{ uri: post.imageUrl }} />
      </View>
      <View style={styles.containerImg}>
        <Image style={styles.postImageImg} source={{ uri: post.imageUrl }} />
      </View>
      <View style={styles.containerImg}>
        <Image style={styles.postImageImg} source={{ uri: post.imageUrl }} />
      </View>  
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  containerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 15,
    alignItems: 'center',
  },

  story: {
    width: 35,
    height: 35,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: '#413B33',
    borderRadius: 70,
  },
  storyText: {
    color: '#EAE0D5',
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 20,
  },
  icone: {
    marginLeft: 10,
  },
  followIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#413B33'
  },
  postImagesContainer: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
    marginLeft:-100,
  },
  containerImg: {
    width: 200,
    height: 300,

  },
  postImageImg: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  postFooterContainer: {
    flexDirection: 'row',
  },
  postFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
  shareIcon: {
    transform: [{ rotate: '320deg' }],
    marginTop: -2,
  },
  postLikesContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  likesText: {
    color: '#fff',
    fontWeight: '600'
  },
  postCaptionContainer: {
    flexDirection: 'row',
  },
  captionText: {
    color: '#fff',
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'normal',
  },
  captionUserText: {
    fontWeight: '800'
  },
  postCommentSectionContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  commentText: {
    color: 'gray',
    flexWrap: 'wrap',
    flex: 1,
  },
});


export default DiscoverPost;