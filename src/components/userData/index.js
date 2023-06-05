import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (id, name, email, imagem) => {
    try {
        const userData = JSON.stringify({ id, name, email, imagem });
        await AsyncStorage.setItem('userData', userData);
    } catch (error) {
        console.log('Error storing user data:', error);
    }
};

export const getUserData = async () => {
    try {
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.log('Error retrieving user data:', error);
        return null;
    }
};