import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
const images = {
  image1: require('../assets/images/image1.png'),
  image2: require('../assets/images/image2.png'),
  image3: require('../assets/images/image3.png'),
  image4: require('../assets/images/image4.png'),
  image5: require('../assets/images/image5.png'),
};

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Banner Section */}
      <ImageBackground
        source={require('../assets/images/image1.png')}
        style={styles.banner}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
          style={styles.overlay}
        >
          <Text style={styles.title}>Welcome to JanConnect!</Text>
        </LinearGradient>
      </ImageBackground>

      {/* Sections */}
      {[
        {
          img: 'image2',
          title: 'Nibh non lobortis mus nibh',
          date: '01.01.2017',
        },
        { img: 'image5', title: 'Mus elit a ultricies at', date: '12.21.2016' },
        { img: 'image4', title: 'Varius a cursus aliquet', date: '11.11.2016' },
        {
          img: 'image3',
          title: 'Luctus blandit mi lectus in nascetur',
          date: '10.30.2016',
        },
      ].map((section, index) => (
        <ImageBackground
          key={index}
          source={images[section.img]}
          style={styles.section}
          resizeMode="cover"
        >
          <View style={styles.articleBox}>
            <Text style={styles.articleTitle}>{section.title}</Text>
            <Text style={styles.date}>{section.date}</Text>
            <Text style={styles.articleContent}>
              Scelerisque enim mi curae erat ultricies lobortis donec velit in
              per cum consectetur purus a enim platea vestibulum.
            </Text>
            <TouchableOpacity style={styles.learnMoreBtn}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ))}

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.icons}>
          <Icon name="twitter" size={24} color="#1DA1F2" />
          <Icon
            name="facebook"
            size={24}
            color="#1877F2"
            style={{ marginLeft: 20 }}
          />
          <Icon
            name="instagram"
            size={24}
            color="#E4405F"
            style={{ marginLeft: 20 }}
          />
        </View>
        <Text style={styles.copyright}>All copyrights reserved 2025.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  banner: { height: 300, justifyContent: 'flex-end' },
  overlay: { padding: 20 },
  title: { fontSize: 28, color: '#fff', fontWeight: 'bold' },
  section: { height: 350, marginBottom: 20 },
  articleBox: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 15,
    margin: 20,
    borderRadius: 15,
  },
  articleTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  date: { fontSize: 14, color: '#555' },
  articleContent: { marginVertical: 10, color: '#333' },
  learnMoreBtn: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  learnMoreText: { color: 'white', fontWeight: 'bold' },
  footer: { padding: 20, alignItems: 'center' },
  loginBtn: {
    backgroundColor: 'black',
    padding: 12,
    width: '80%',
    borderRadius: 8,
    marginBottom: 10,
  },
  loginText: { color: 'white', textAlign: 'center', fontSize: 16 },
  signupBtn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 12,
    width: '80%',
    borderRadius: 8,
    marginBottom: 20,
  },
  signupText: { color: 'black', textAlign: 'center', fontSize: 16 },
  icons: { flexDirection: 'row', marginTop: 10 },
  copyright: { marginTop: 10, fontSize: 12, color: '#777' },
});

export default Home;
