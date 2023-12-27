import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Favorite() {
  const { height, width } = Dimensions.get("screen");
  return (
    <SafeAreaView>
      <StatusBar hidden barStyle={"light-content"} />
      <View
        style={{
          padding: 10,
          backgroundColor: "#FDFDFD",
          height,
        }}
      >
        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F2F2F2",
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          >
            <MaterialIcons
              name="menu"
              style={{
                fontSize: 30,
                borderRadius: 100,
                textAlign: "center",
              }}
            />
          </View>
          <Image source={require("../../assets/avatar.png")} />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            gap: 10,
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <MaterialIcons
            name="search"
            style={{ fontSize: 20, color: "gray" }}
          />
          <TextInput
            style={{ fontSize: 20 }}
            placeholder="search any product"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              All Featured
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  minWidth: 70,
                  minHeight: 30,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 5,
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>Sort</Text>
                <MaterialIcons
                  name="sort-by-alpha"
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  minWidth: 70,
                  minHeight: 30,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 5,
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>Filter</Text>
                <MaterialIcons
                  name="filter-alt"
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                shadowColor: "gray",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
                width,
                gap: 10,
              }}
            >
              <View>
                <Image source={require("../../assets/1.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Fashion
                </Text>
              </View>
              <View>
                <Image source={require("../../assets/2.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>Kids</Text>
              </View>
              <View>
                <Image source={require("../../assets/3.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Womens
                </Text>
              </View>
              <View>
                <Image source={require("../../assets/4.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>Mens</Text>
              </View>
              <View>
                <Image source={require("../../assets/5.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Beauty
                </Text>
              </View>
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 180,
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/dress.png")}
                style={{
                  borderRadius: 10,
                  width: "auto",
                  height: 300,
                  objectFit: "cover",
                }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Black Dress
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                600.000,00KZ{" "}
              </Text>
            </View>

            <View
              style={{
                width: 180,
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/shirt.png")}
                style={{
                  borderRadius: 10,
                  width: "auto",
                  height: 300,
                  objectFit: "cover",
                }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Mens Stary
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                300.000,00KZ{" "}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: -70,
            }}
          >
            <View
              style={{
                width: 180,
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/shirt.png")}
                style={{
                  borderRadius: 10,
                  width: "auto",
                  height: 300,
                  objectFit: "cover",
                }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>Shirt</Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                600.000,00KZ{" "}
              </Text>
            </View>

            <View
              style={{
                width: 180,
                backgroundColor: "white",
                borderRadius: 10,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/dress.png")}
                style={{
                  borderRadius: 10,
                  width: "auto",
                  height: 300,
                  objectFit: "cover",
                }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Womens Dress
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                380.000,00KZ{" "}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
