import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
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

  const handleRegister = async () => {
    if (!username) {
      showErrorToast("Please enter your username");
      return;
    }

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
      const res = await axios.post('http://localhost:5000/api/auth/register', { 
        username,
        email, 
        password 
      });
      
      if (res.data.success) {
        showSuccessToast("Registration successful! Please check your email for OTP");
        setShowOtpInput(true);
      } else {
        showErrorToast(res.data.message || "Registration failed");
      }
    } catch (error: any) {
      console.error("Registration error:", error);
      let errorMessage = "An error occurred during registration";
      
      if (error.response) {
        errorMessage = error.response.data.message || error.response.data.error || errorMessage;
      } else if (error.request) {
        errorMessage = "No response from server. Please try again.";
      }
      
      showErrorToast(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      showErrorToast("Please enter the OTP");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-user', { 
        email,
        otp 
      });
      
      if (res.data.message === "OTP verified successfully") {
        showSuccessToast("Verification successful!");
        router.replace('/screens/pages/Home');
      } else {
        showErrorToast(res.data.message || "Verification failed");
      }
    } catch (error: any) {
      console.error("Verification error:", error);
      let errorMessage = "An error occurred during verification";
      
      if (error.response) {
        errorMessage = error.response.data.message || error.response.data.error || errorMessage;
      } else if (error.request) {
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

      {!showOtpInput ? (
        <>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
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
                color="#121826"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
  onPress={handleRegister}
  disabled={loading}
  style={{ borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}
>
  <LinearGradient
    colors={['#3359a5', '#1ab3cd']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.loginButton}
  >
    {loading ? (
      <ActivityIndicator color="#fff" />
    ) : (
      <Text style={styles.loginButtonText}>Sign Up</Text>
    )}
  </LinearGradient>
</TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account? </Text>
            <Link href="./Login" style={styles.signUpLink}>
              Login
            </Link>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.label}>Verification OTP</Text>
          <Text style={styles.subText}>We've sent a 6-digit OTP to {email}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={6}
          />

          <TouchableOpacity
            onPress={handleVerifyOtp}
            disabled={loading}
            style={{ borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}
          >
            <LinearGradient
              colors={['#3552A2', '#1889D0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.loginButtonText}>Verify OTP</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.resendButton}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.resendButtonText}>Resend OTP</Text>
          </TouchableOpacity>
        </>
      )}
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#121826",
    marginBottom: 8,
    fontWeight: "500",
  },
  subText: {
    fontSize: 12,
    color: "#525f72",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#f1f5f9",
    color: "#525f72",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#f1f5f9",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    color: "#525f72",
  },
  loginButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resendButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3552A2",
    backgroundColor: 'transparent'
  },
  resendButtonText: {
    color: "#3552A2",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signUpText: {
    color: "#121826",
  },
  signUpLink: {
    color: "#007aff",
    fontWeight: "500",
    marginLeft: 5,
  },
});