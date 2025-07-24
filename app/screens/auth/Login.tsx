import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Toast from "react-native-toast-message";

export default function Login() {
  const [email, setEmail] = useState("mouzzamdaniddshh@gmail.com");
  const [password, setPassword] = useState("India@123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const showErrorToast = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      position: 'bottom',
    });
  };

  const showSuccessToast = (message: string) => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      position: 'bottom',
    });
  };

  const handleSubmit = async () => {
    if (!email) {
      showErrorToast("Please enter your email");
      return;
    }

    if (!password) {
      showErrorToast("Please enter your password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { 
        email, 
        password 
      });
      
      if (res.data.message === "Login successful") {
        showSuccessToast("Login successful!");
        // You might want to store the token/user data here
        // await AsyncStorage.setItem('authToken', res.data.token);
        router.replace('/screens/pages/Home');
      } else {
        showErrorToast(res.data.message || "Login failed");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      let errorMessage = "An error occurred during login";
      
      if (error.response) {
        // The request was made and the server responded with a status code
        errorMessage = error.response.data.message || error.response.data.error || errorMessage;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = "No response from server. Please try again.";
      }
      
      showErrorToast(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#777"
          />
        </TouchableOpacity>
      </View>

      <Link href="./forgot-password" style={styles.forgotPassword}>
        Forgot Password?
      </Link>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>Or Login With</Text>
        <View style={styles.dividerLine} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../assets/images/google-icon.png")}
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../assets/images/apple-icon.png")}
          style={[styles.socialIcon, styles.apple]}
        />
        <Text style={styles.socialButtonText}>Sign in with Apple</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Link href="./Register" style={styles.signUpLink}>
          Sign Up
        </Link>
        <Link href="../pages/Home" style={styles.signUpLink}>
          Home
        </Link>
      </View>
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#0A1128", // Deep navy blue background
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
    
  },
  label: {
    fontSize: 14,
    color: "#A4B0BD", // Soft gray for labels
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#1E3A8A", // Medium blue border
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#16213E", // Darker blue input background
    color: "#F8F9FA", // Light text color
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E3A8A",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#16213E",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    color: "#F8F9FA",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#3B82F6", // Bright blue for links
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#6b9cee", // Vibrant blue for primary button
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#0A1128",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#1E293B", // Dark blue-gray for divider
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#94A3B8", // Medium gray for divider text
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: .5,
    borderColor: "#6b9cee",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: 'transparent'// Dark background for social buttons
  },
  apple: {
    tintColor: "#fff", // Light color for Apple icon
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
  socialButtonText: {
    color: "#F8F9FA", // Light text for social buttons
    fontWeight: "500",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#94A3B8", // Medium gray for secondary text
  },
  signUpLink: {
    color: "#6b9cee", // Bright blue for links
    fontWeight: "500",
    marginLeft: 5,
  },
});