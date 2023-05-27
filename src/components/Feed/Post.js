import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons';

const FeedPost = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <PostLikes post={post} />
        <PostCaption post={post} />
        <PostCommentSection post={post} />
        <PostComment post={post} />
      </View>

    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={styles.containerPost}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.story} source={{ uri: post.profile_picture }} />
      <Text style={styles.storyText}>
        {post.user}
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={styles.postImageContainer}>
    <Image style={styles.postImageImg} source={{ uri: post.imageUrl }} />
  </View>
);

const PostFooter = ({ post }) => (
  <View /* style={styles.postFooterContainer} */>

  </View>
);
/* const PostFooter = ({ post }) => (
  <View style={styles.postFooterContainer}>
    <View style={styles.postFooterIconContainer} >
      <TouchableOpacity>
        <Ionicons name='heart-outline' size={25} color={'#fff'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='chatbubble-outline' size={25} color={'#fff'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons style={styles.shareIcon} name='send-outline' size={25} color={'#fff'} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }} >
      <TouchableOpacity>
        <Ionicons name='bookmark-outline' size={25} color={'#fff'} />
      </TouchableOpacity>
    </View>
  </View>
); */

const PostLikes = ({ post }) => (
  <View></View>
  /* <View style={styles.postLikesContainer}>
    <Text style={styles.likesText}>
      {
        post.likes//.toLocaleString('en')
      }likes
    </Text>
  </View> */
);

const PostCaption = ({ post }) => (
  <View style={styles.postCaptionContainer}>
    <Text style={styles.captionText}>
      <Text style={styles.captionUserText} >
        {post.user}:...
      </Text>
      {post.caption}
    </Text>
  </View>
);

const PostCommentSection = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 5 }}>
    {
      !!post.comments.length && (
        <Text style={{ color: 'gray', flexWrap: 'wrap', flex: 1 }}>
          View {
            post.comments.length > 1 ? 'all ' : ''
          }{
            post.comments.length
          }{
            post.comments.length > 1 ? ' comments' : 'comment'
          }
        </Text>)
    }
  </View >
);

const PostComment = ({ post }) => (
  <>{
    post.comments.map((Comment, index) => (
      <View key={index} style={styles.postCaptionContainer}>
        <Text style={styles.captionText}>
          <Text style={styles.captionUserText} >
            {post.user}
          </Text>
          <Text>
            {post.caption}
          </Text>
        </Text>
      </View>
    ))
  }
  </>
)
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
  postImageContainer: {
    width: '100%',
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


export default FeedPost;